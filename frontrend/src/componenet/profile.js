import React from "react";
import { useHistory } from "react-router";
import { profileApi } from "./services";

export default function Profile(props) {
  let history = useHistory();
  const [values, setValues] = React.useState({
    firstname: "",
    lastame: "",
    password: "",
  });
  const [imageFile, setImageFile] = React.useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Values", values);
    let token = "";
    profileApi(values, token);
    history.push("/");
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleOnSubmit}>
        <div class="form-group">
          <label for="exampleFormControlFile1">Profile Image</label>
          <input
            name="profileImage"
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">First name</label>
          <input
            name="firstname"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            value={values.firstname}
            placeholder="First Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Last name</label>
          <input
            name="lastname"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            onChange={handleOnChange}
            value={values.lastname}
            placeholder="Last Name"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={handleOnChange}
            value={values.password}
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
