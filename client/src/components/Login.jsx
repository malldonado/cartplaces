import React from "react";
import "./index.css";
import Left from "./login/Left";
import Right from "./login/Right";

function Login() {
  return (
    <div class="flex justify-center mx-auto md:h-screen">
      <Left/>
      <Right/>
    </div>
  );
}

export default Login;
