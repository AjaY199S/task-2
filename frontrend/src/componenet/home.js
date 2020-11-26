import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  let history = useHistory();

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={(e) => {
          history.push("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={(e) => {
          history.push("/signup");
        }}
      >
        Signup
      </button>
    </div>
  );
}
