import React, { useState, useEffect } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";

const Nav = () => {
  //useHistory
  const history = useHistory();
  //state setting
  const [show, setShow] = useState(false);

  const animateNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  //setting up a scroll listener for the navbar
  useEffect(() => {
    window.addEventListener("scroll", animateNavbar);
    return () => {
      window.removeEventListener("scroll", animateNavbar);
    };
  }, []);
  return (
    //always apply the nav class, but if show is true, add the nav__black class
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => {
          history.push("/");
        }}
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
      />
      <img
        onClick={() => {
          history.push("/profile");
        }}
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Profile Avatar"
      />
    </div>
  );
};

export default Nav;
