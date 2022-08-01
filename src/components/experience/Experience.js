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
              <div class="back">
                {/* <!-- back side content --> */}
                <h3>Two Years On-Going</h3>
                <div className="back_lists">
                  <ul>
                    <li>Feasibility Study</li>
                    <li>Information Gathering</li>
                    <li>Receiving Data</li>
                    <li>Mark Up and Stylesheet Development</li>
                    <li>Managing Software Workflow</li>
                  </ul>
                  <ul>
                    <li>Coding</li>
                    <li>Debugging</li>
                    <li>Interface</li>
                    <li>Refining Functionality</li>
                    <li>Search Engine Optimization</li>
                  </ul>
                </div>
              </div>
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
              <div class="back">
                {/* <!-- back side content --> */}
                <h3>Five Years of Service </h3>
                <div className="back_lists">
                  <ul>
                    <li>Web Services and APIs</li>
                    <li>Data Storage Solutions</li>
                    <li>Server-side Web Application Logic</li>
                  </ul>
                  <ul>
                    <li>UI Integration</li>
                    <li>Application Optimisation</li>
                    <li>Tests, Security and Quality Control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
