import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signinScreen">
      <h1>Sign In</h1>
      <form action="">
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
      </form>
      <h4>
        <span className="signinScreen__gray">New to Netflix? </span>{" "}
        <span className="signupScreen__link" onClick={register}>
          Sign up now.
        </span>
      </h4>
    </div>
  );
};

export default SignIn;
