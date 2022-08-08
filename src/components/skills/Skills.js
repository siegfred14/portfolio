import "./skills.css";
import React from "react";
import html5 from "../../img/skills/HTML5.png";

export const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container skills_container">
        <div className="skill_box">
          <div className="skill_title">
            <div className="img">
              <img src={html5} alt="HTML5" />
            </div>
            <h3>HTML5</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
