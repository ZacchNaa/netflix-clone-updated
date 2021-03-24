import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signupScreen">
      <h1>Sign Up</h1>
      <form action="">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
