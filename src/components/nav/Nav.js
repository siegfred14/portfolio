import React, { useState } from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GiSkills, GiSpanner } from "react-icons/gi";
import { BiBriefcase } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";

// const changeActiveNav = (href) => {
//   activeNav === href ? "active" : "";
// };

// Change active on scroll
// const sections = document.querySelectorAll("section");
// const navAnchor = document.querySelectorAll("nav a");

// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navAnchor.forEach((a) => {
//     a.classList.remove("active");
//     if (a.classList.contains(current)) {
//       a.classList.add("active");
//     }
//   });
// };

// let navbar = document.querySelector(".navbar");
// window.addEventListener("scroll", () => {
//   if (scrollY >= 600) {
//     navbar.classList.add("newBg");
//   } else {
//     navbar.classList.remove("newBg");
//   }
//   console.log(scrollY);
// });

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  function scrolled() {
    console.log("scrolling");
  }

  return (
    <nav onScroll={scrolled}>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={
          activeNav === "#" || window.screen.height <= 600 ? "active" : ""
        }
      >
        <FaHome />
        <span>home</span>
      </a>
      <a
        href="#about"
        id="nav_about"
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
        id="nav_services"
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
