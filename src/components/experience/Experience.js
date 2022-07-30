import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import codeclan from "../../img/code_clan.png";
import kwatri from "../../img/Kwatri.jpg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Sharing with you</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="card_one">
          <div class="flip-container">
            <div class="card">
              <div class="front">
                {/* <!-- front side content --> */}
                <h3>Frontend Developer</h3>
                <div className="experience_content">
                  <article className="experience_details">
                    <BsPatchCheckFill />
                    <h4>Code Clan Nigeria</h4>
                  </article>
                  <img src={codeclan} alt="" />
                </div>
              </div>
              <div class="back">{/* <!-- back side content --> */}</div>
            </div>
          </div>
        </div>

        <div className="card_two">
          <div class="flip-container">
            <div class="card">
              <div class="front">
                {/* <!-- front side content --> */}
                <h3>Backend Developer</h3>
                <div className="experience_content">
                  <article className="experience_details">
                    <BsPatchCheckFill />
                    <h4>Kwatri Digital</h4>
                  </article>
                  <img src={kwatri} alt="" />
                </div>
              </div>
              <div class="back">{/* <!-- back side content --> */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
