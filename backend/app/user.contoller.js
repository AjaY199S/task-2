const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const users = require("./useModal");
const dir = "./uploads/";

const _user = {};

_user.signup = async (req, res, next) => {
  console.log("hrheheh");
  try {
    let payloadData = req.body;
    let hash = await bcrypt.hash(payloadData.password, 10);
    payloadData.password = hash;
    console.log("here", payloadData);
    let checkAlerady = await users.findOne({ email: req.body.email });
    if (checkAlerady) {
      res.json({
        success: false,
        message: "Email or username Alrady Register.",
      });
    } else {
      await new users(payloadData)
        .save()
        .then((response) => {
          res.json({
            success: true,
            message: "Successfully Register.",
            data: response,
          });
        })
        .catch((err) => {
          if (err.name === "MongoError" && err.code === 11000) {
            res.json({
              success: false,
              message: "email or username Already Exist.",
            });
          }
        });
    }
  } catch (err) {
    console.log("err", err);
    res.json({
      success: false,
      message: "Registration is failed.",
    });
  }
};

_user.login = async (req, res, next) => {
  let payloadData = req.body;

  try {
    let user = await users.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (!user) {
      res.json({
        success: false,
        message: "email or username is Not Found.",
      });
    } else {
      let pwd = await bcrypt.compare(payloadData.password, user.password);
      if (pwd === true) {
        let tokenData = {
          email: user.email,
          username: user.username,
          _id: user._id,
        };
        let token = jwt.sign(tokenData, "ajayMernTask", {
          expiresIn: "1d",
        });

        res.json({
          success: true,
          message: "User Login Successfully.",
          data: {
            user: user,
            token: token,
          },
        });
      } else {
        res.json({
          success: false,
          message: "password is not match.",
        });
      }
    }
  } catch {
    res.json({
      success: false,
      message: "Login is failed.",
    });
  }
};

_user.updateProfile = async (req, res) => {
  let payloadData = req.body;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  upload(req, res, async (err) => {
    if (err) {
      res.json({
        success: false,
        message: err,
      });
    } else {
      let photos = JSON.parse(JSON.stringify(req.files));
      if (Object.entries(photos).length === 0) {
        res.json({
          sucess: false,
          message: "no image get.",
        });
        return;
      }
      payloadData.profileImg = photos;

      let userData = await media.findOneAndUpdate(
        mongoose.Types.ObjectId(req.user_id),
        dataToSave,
        {
          upsert: true,
          new: true,
        }
      );

      if (userData) {
        res.json({
          success: false,
          message: "user Updated Update.",
        });
      }
    }
  });
};

_user.authenticate = async (req, res, next) => {
  let token = getToken(req);
  jwt.verify(token, "ajayMernTask", (err, decoded) => {
    if (decoded) {
      req.user_id = decoded._id;
      req.email = decoded.email;
      req.username = decoded.username;
      next();
    } else {
      res.json({
        success: false,
        message: "Invalid token",
      });
    }
  });
};

const getToken = function (req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  return null;
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime().toString() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).fields([
  {
    name: "ProfileImage",
    maxCount: 1,
  },
]);

module.exports = _user;
