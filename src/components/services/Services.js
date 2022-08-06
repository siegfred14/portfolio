import React from "react";
import "./services.css";
import { FaCanadianMapleLeaf } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container services_container">
        {/* web development */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Writing well designed, testable, efficient code by employing
                best software development practices
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Working with product owners to determine business requests,
                requirements and desired functionality
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Creating unified layout/user interfaces by using standard
                HTML/CSS practices
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Integrating data from various back-end services and databases
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>maintaining, expanding, and scaling of website</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Contributing to all phases of the development lifecycle</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Follow best practices such as continuous integration, SCRUM,
                refactoring and code standards
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Driving continuous adoption and integration of relevant new
                technologies into design
              </p>
            </li>
          </ul>
        </article>

        {/* picture editing */}
        <article className="service">
          <div className="service_head">
            <h3>Picture Editing</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Knowledge of photography techniques.</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Knowledge of photo editing software tools</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Creativity and artistic mindset</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Leadership and motivational skills.</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Organization and time management abilities.</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Collaboration and team-building abilities</p>
            </li>
            {/* <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Follow best practices such as continuous integration, SCRUM,
                refactoring and code standards
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Driving continuous adoption and integration of relevant new
                technologies into design
              </p>
            </li> */}
          </ul>
        </article>

        {/* sales and public speaking */}
      </div>
    </section>
  );
};

export default Services;
