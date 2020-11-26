import axios from "axios";

export const loginApi = (data) => {
  axios({
    method: "POST",
    url: `http://localhost:3000/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    responseType: "json",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const signupApi = (data) => {
  axios({
    method: "POST",
    url: `http://localhost:3000/signup`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
    responseType: "json",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const profileApi = (data, token) => {
  axios({
    method: "POST",
    url: `http://localhost:3000/profile`,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    data: data,
    responseType: "json",
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
