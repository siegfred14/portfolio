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
                Employing state-of-the-art tools and technologies, following
                best practices to produce the client side of websites and web
                applications, allowing users to see and interact with them
                directly.
              </p>
            </li>
            {/* <li>
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
            </li> */}
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
              <p>
                Reviewing, editing and identifying relevant photos, to make them
                more appealing for publication, dissemination, personal targets
                or to meet the organization's photography needs.
              </p>
            </li>
            {/* <li>
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
            </li> */}
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

        {/* Systems Support */}
        <article className="service">
          <div className="service_head">
            <h3>Systems Support</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Analyzing user requirements and design and develop system
                architecture and specifications by Performing research, design,
                development and integration of computer hardware such as bios,
                memory, storage and microprocessors
              </p>
            </li>
            {/* <li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Analyzing user requirements and design and develop system
                architecture and specifications
              </p>
            </li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Performing research, design, development and integration of
                computer hardware such as bios, memory, storage and
                microprocessors
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Evaluating, documenting and optimizing capacity and performance
                of information and communication system networks
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Undertaking research, design and development of network
                architecture of information and communication systems
              </p>
            </li> */}
          </ul>
        </article>

        {/* sales and public speaking */}
        {/* <article className="service">
          <div className="service_head">
            <h3>Sales/Public Speaking</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Gathering, investigating, and summarizing market data and trends
                to draft reports
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Implementing new sales plans and advertising</p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>
                Recruiting, training, scheduling, coaching, and managing
                marketing and sales teams to meet sales and marketing human
                resource objectives
              </p>
            </li>
            <li>
              <FaCanadianMapleLeaf className="service_list_icon" />
              <p>Conducting market research on rival products</p>
            </li>
            
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
