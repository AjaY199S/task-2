import React from "react";
import { useHistory } from "react-router";
import { signupApi } from "./services";
function Signup(props) {
  let history = useHistory();
  const [values, setValues] = React.useState({
    email: "",
    username: "",
    firstname: "",
    lastame: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Values", values);
    signupApi(values);
    history.push("/");
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleOnSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={values.email}
            onChange={handleOnChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input
            name="username"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Uusername"
            value={values.username}
            onChange={handleOnChange}
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
          Signup
        </button>
      </form>
    </div>
  );
}
export default Signup;
