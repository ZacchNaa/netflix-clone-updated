import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Login.css";

const Login = () => {
  //state
  const [signin, setSignin] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
          className="loginScreen__logo"
        />
        <button onClick={() => setSignin(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signin ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignin(true)}
                    className="loginScreen__getStarted"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
