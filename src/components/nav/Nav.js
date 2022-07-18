import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiSkills, GiSpanner } from "react-icons/gi";
import { BiBriefcase } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <FaHome />
      </a>
      <a href="#about">
        <FiUser />
      </a>
      <a href="#experience">
        <GiSkills />
      </a>
      <a href="#services">
        <GiSpanner />
      </a>
      <a href="#portfolio">
        <BiBriefcase />
      </a>
      <a href="#contact">
        <BsMailbox />
      </a>
    </nav>
  );
};

export default Nav;
