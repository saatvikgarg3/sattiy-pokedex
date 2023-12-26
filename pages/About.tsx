import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/myphoto.jpg";
import {FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Saatvik Garg</h1>
      <h2 className="profile-text">The Creator of Sattiy's POKEDEX</h2>
      <h4 className="profile-text">
      </h4>
      <div className="profile-links">
        <a href="https://github.com/saatvikgarg3">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/saatvik-garg/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);