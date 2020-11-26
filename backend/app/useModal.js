/*  ©2020 Ozvid Technologies Pvt. Ltd. All Rights Reserved.Hosted by jiWebHosting.com */
const mongoose = require("mongoose");
module.exports = mongoose.model("users", {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  usename: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  profileImg: { type: String },
});
