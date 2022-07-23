import React from "react";
import "./about.css";
import img from "../../img/SmartSelect_20220721-143019_Gallery.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get Conversant!</h5>
      <h2>Know About Me</h2>

      <div className="container about_container">
        <div className="about_content">
          <p>
            I Am A Frontend Developer. I Work In The Branch Of Computer Science
            That Includes The Development And Building Of Computer web
            applications, drawing from my knowledge of engineering, computer
            science, and math to write, edit, test, and debug programs.
            <br />
            <br />
            I am comfortably a team player who pays attention to detail, is
            decision-oriented and result-driven, and possesses great
            interpersonal and work relationship.
            <br />
            <br />I hold a degree in Computer Science and I am fluent in{" "}
            <span>English</span> and <span className="french">French</span>
          </p>

          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Above 3 years</small>
            </article>
          </div>

          <div className="about_cards">
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>200 +</small>
            </article>
          </div>

          <div className="about_cards">
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+</small>
            </article>
          </div>

          {/* <a href="#contact"className="btn btn-primary">Contact Me</a> */}
        </div>

        <div className="about_me">
          <figure className="about_me_image">
            <img src={img} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
