import React from "react";
import { useHistory } from "react-router";
import { loginApi } from "./services";

export default function Login() {
  let history = useHistory();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Values", values);
    loginApi(values);
    history.push("/profile");
  };
  console.log("Values", values);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleOnSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={values.email}
            onChange={handleOnChange}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={handleOnChange}
            value={values.password}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
