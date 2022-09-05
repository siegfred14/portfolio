import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { SiTwitter } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="footer-area">
      <a href="#" className="logo">
        SIEGFRED LOGO
      </a>

      <ul className="section_links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/siegfreds">
          <BsFacebook className="footer_socials_item" />
        </a>
        <a href="https://www.instagram.com/siegfreds">
          <RiInstagramFill className="footer_socials_item" />
        </a>
        <a href="https://twitter.com/siegfred_1">
          <SiTwitter className="footer_socials_item" />
        </a>
        <a href="https://www.linkedin.com/siegfred">
          <BsLinkedin className="footer_socials_item" />
        </a>
        <a href="https://github.com/siegfred14">
          <BsGithub className="footer_socials_item" />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          Designed and Developed by <b>SIEGFREDSDOM</b>
        </small>
        <small> &copy;{new Date().getFullYear()} | All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
