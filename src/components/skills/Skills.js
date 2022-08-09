import "./skills.css";
import React from "react";
import html5 from "../../img/skills/HTML5.png";
import css3 from "../../img/skills/CSS3.png";
import sass from "../../img/skills/Sass_Logo.png";
import js from "../../img/skills/JavaScript-logo.png";
import python from "../../img/skills/Python_logo.png";
import django from "../../img/skills/django.png";
import drf from "../../img/skills/DRF_logo.png";
import git from "../../img/skills/Git_logo.png";
import photoshop from "../../img/skills/photoshop.png";
import bootstrap from "../../img/skills/bootstrap-logo.png";
import react from "../../img/skills/react.png";
import mysql from "../../img/skills/mySQL.png";

export const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container skills_container">
        <div className="skill_box html5">
          <div className="skill_title">
            <div className="img">
              <img src={html5} className="skill-icon" alt="HTML5" />
            </div>
            <h3>HTML5</h3>
          </div>
        </div>
        <div className="skill_box CSS">
          <div className="skill_title">
            <div className="img">
              <img src={css3} className="skill-icon" alt="CSS3" />
            </div>
            <h3>CSS3 | Sass</h3>
          </div>
        </div>
        <div className="skill_box JS">
          <div className="skill_title">
            <div className="img">
              <img src={js} className="skill-icon" alt="JS" />
            </div>
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className="skill_box mysql">
          <div className="skill_title">
            <div className="img">
              <img src={mysql} className="skill-icon" alt="MySQL" />
            </div>
            <h3>MySQL</h3>
          </div>
        </div>
        <div className="skill_box photoshop">
          <div className="skill_title">
            <div className="img">
              <img src={photoshop} className="skill-icon" alt="Photoshop" />
            </div>
            <h3>Photoshop</h3>
          </div>
        </div>
        <div className="skill_box html5">
          <div className="skill_title">
            <div className="img">
              <img src={git} className="skill-icon" alt="Git" />
            </div>
            <h3>Git | Github</h3>
          </div>
        </div>
        <div className="skill_box html5">
          <div className="skill_title">
            <div className="img">
              <img src={react} className="skill-icon" alt="React" />
            </div>
            <h3>React</h3>
          </div>
        </div>
        <div className="skill_box python">
          <div className="skill_title">
            <div className="img">
              <img src={python} className="skill-icon" alt="Python" />
            </div>
            <h3>Python</h3>
          </div>
        </div>
        <div className="skill_box django">
          <div className="skill_title">
            <div className="img">
              <img src={django} className="skill-icon" alt="Django" />
            </div>
            <h3>Django [Rest Framework]</h3>
          </div>
        </div>

        <div className="soft_skills">
          <small>team player</small>
        </div>
      </div>
    </section>
  );
};
