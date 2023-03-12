import React from "react";
import "./header.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/siegfred/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/siegfred14/" target="_blank">
        <FaGithub />
      </a>
      <a href="twitter.com/siegfreds" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
