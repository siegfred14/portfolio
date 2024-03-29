import React from "react";
import "./portfolio.css";
import { VideoModal } from "./VideoModal";
import IMG1 from "../../img/portfolio/meteorology.png";
import IMG2 from "../../img/portfolio/greaterNigeriaWebsite.png";
import IMG3 from "../../img/portfolio/calulator.png";
import IMG4 from "../../img/portfolio/strata&structures.png";
import IMG5 from "../../img/portfolio/budget_app.png";
import IMG6 from "../../img/portfolio/belleda.png";

let portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Meteorological App",
    github: "https://github.com/siegfred14/meteorologyWebApp",
    demo: "Y9HecM1yoXo",
  },
  {
    id: 2,
    image: IMG2,
    title: "Greater Nigeria Website",
    github:
      "https://github.com/siegfred14/2020projects/tree/master/Nigerian%20Website",
    demo: "WSUMTKYnfaM",
  },
  {
    id: 3,
    image: IMG3,
    title: "Simple React Calculator",
    github: "https://github.com/siegfred14/react-calculator",
    demo: "Vuq3RFI5MhM",
  },
  {
    id: 4,
    image: IMG4,
    title: "Strata & Structures Ltd Website ",
    github: "https://github.com/siegfred14/strata-and-structures",
    demo: "vjjKHCJbEBA",
  },
  {
    id: 5,
    image: IMG5,
    title: "Python Budget App",
    github: "https://github.com/siegfred14/budgetapp",
    demo: "G6zdMDphQ6s",
  },
  {
    id: 6,
    image: IMG6,
    title: "Belleda E-Commerce API",
    github: "https://github.com/siegfred14/Belleda-be-pjt-17",
    demo: "ujjFT6SSquI",
    // demo: "http://belleda-back.herokuapp.com/?format=openapi",
  },
];

// let extraData = {
//   data1: "I Created A Meteorological Application, Which Fetches From API To Supply Real-Time Climatic Information On Global Cities",
//   data2: "An E-Commerce Web Application For A Trading Firm",
//   data6: "I led a team to develop this private project for a company. It is an API for an E-Commerce application."
// }

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
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                {/* if({demo} != ""){<VideoModal videoId={demo} />}else
                {
                  <a
                    href={demo}
                    onClick={(e) => {
                      alert("Under Construction | Please try later!");
                      e.preventDefault();
                    }}
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                } */}
                <VideoModal videoId={demo} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
