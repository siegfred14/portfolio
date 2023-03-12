import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import codeclan from "../../img/experience/code_clan.png";
import kwatri from "../../img/experience/kwatri.png";

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
                    <BsPatchCheckFill className="experience_details_icon" />
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
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Feasibility
                      Study
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Information
                      Gathering
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Receiving
                      Data
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Mark Up and
                      Stylesheet Development
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Managing
                      Software Workflow
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Coding
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Debugging
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Interface
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Refining
                      Functionality
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Search
                      Engine Optimization
                    </li>
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
                    <BsPatchCheckFill className="experience_details_icon" />
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
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Web Services
                      and APIs
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Data Storage
                      Solutions
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Server-side
                      Web Application Logic
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> UI
                      Integration
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Application
                      Optimisation
                    </li>
                    <li>
                      <FaCanadianMapleLeaf className="list_icon" /> Tests,
                      Security and Quality Control
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 className="tap_here">
        <MdFingerprint className="icon" /> <br /> Tap Cards
      </h5>
    </section>
  );
};

export default Experience;
