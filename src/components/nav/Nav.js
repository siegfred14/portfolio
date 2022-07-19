import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiSkills, GiSpanner } from "react-icons/gi";
import { BiBriefcase } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";

// const changeNav = () =>{
//   let navNew = document.querySelector('.nav');
//   navNew.background
// }

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <FaHome />
        <span>home</span>
      </a>
      <a href="#about">
        <FiUser />
        <span>about</span>
      </a>
      <a href="#experience">
        <GiSkills />
        <span>experience</span>
      </a>
      <a href="#services">
        <GiSpanner />
        <span>services</span>
      </a>
      <a href="#portfolio">
        <BiBriefcase />
        <span>portfolio</span>
      </a>
      <a href="#contact">
        <BsMailbox />
        <span>contact</span>
      </a>
    </nav>
  );
};

export default Nav;
