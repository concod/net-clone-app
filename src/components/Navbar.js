import "./Navbar.css";
import { useEffect, useState } from "react";
import avatar from "../img/avatar.png";
import React from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="neflix-logo"
      />
      <img className="nav__avatar" src={avatar} alt="neflix-logo" />
    </div>
  );
}

export default Navbar;
