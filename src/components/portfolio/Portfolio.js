import React from "react";
import "./portfolio.css";
import IMG1 from "../../img/portfolio/meteorology.png";
import IMG2 from "../../img/portfolio/inikpiFurnitures.png";
import IMG3 from "../../img/portfolio/calulator.png";
import IMG4 from "../../img/portfolio/strata&structures.png";
import IMG5 from "../../img/portfolio/pythonAtmApp.jpg";
import IMG6 from "../../img/portfolio/belleda.png";

let portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Meteorological App",
    github: "https://github.com/siegfred14/meteorologyWebApp",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "Inikpi Furnitures Ltd Website",
    github: "https://github.com/siegfred14/jsOnlineStore",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Simple React Calculator",
    github: "https://github.com/siegfred14/react-calculator",
    demo: "#",
  },
  {
    id: 4,
    image: IMG4,
    title: "Strata & Structures Ltd Website ",
    github: "https://github.com/siegfred14/strata-and-structures",
    demo: "#",
  },
  {
    id: 5,
    image: IMG5,
    title: "Python ATM Application",
    github: "https://github.com/siegfred14/AtmMockUpApp",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Belleda E-Commerce API",
    github: "https://github.com/siegfred14/Belleda-be-pjt-17",
    demo: "http://belleda-back.herokuapp.com/?format=openapi",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Preview My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Meteorological App</h3> */}
        {/* <small>I Created A Meteorological Application, Which Fetches From API To
            Supply Real-Time Climatic Information On Global Cities.</small> */}
        {/* <div className="portfolio_item_cta">
            <a
              href="https://github.com/siegfred14/meteorologyWebApp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Inikpi Furnitures Ltd Website</h3> */}
        {/* <small>An E-Commerce Web Application For A Trading Firm</small> */}
        {/* <div className="portfolio_item_cta">
            <a
              href="https://github.com/siegfred14/jsOnlineStore"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article> */}

        {/* <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Simple React Calculator.</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/siegfred14/react-calculator"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Strata & Structures Ltd Website.</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/siegfred14/strata-and-structures"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Python ATM Application</h3>
          <div className="portfolio_item_cta">
            <a
              href="https://github.com/siegfred14/AtmMockUpApp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Belleda Fashion App</h3> */}
        {/* <div className="content">
            <small>
              I led a team to develop this private project for a company. It is
              an API for an E-Commerce application.
            </small>
          </div> */}
        {/* <div className="portfolio_item_cta">
            <a
              href="https://github.com/siegfred14/Belleda-be-pjt-17"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://belleda-back.herokuapp.com/?format=openapi"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
