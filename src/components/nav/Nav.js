import React, { useState } from "react";
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
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FaHome />
        <span>home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FiUser />
        <span>about</span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <GiSkills />
        <span>experience</span>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <GiSpanner />
        <span>services</span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BiBriefcase />
        <span>portfolio</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsMailbox />
        <span>contact</span>
      </a>
    </nav>
  );
};

export default Nav;
