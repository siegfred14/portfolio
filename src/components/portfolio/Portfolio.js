import React from "react";
import "./portfolio.css";
import IMG6 from "../../img/portfolio/belleda.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>
            I Created A Meteorological Application, Which Fetches From API To
            Supply Real-Time Climatic Information On Global Cities.
          </h3>
          <a href="https://github.com/siegfred14/meteorologyWebApp">Github</a>
          <a href="#">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>An E-Commerce Web Application For A Trading Firm.</h3>
          <a href="https://github.com/siegfred14/jsOnlineStore">Github</a>
          <a href="#">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Simple React Calculator.</h3>
          <a href="https://github.com/siegfred14/react-calculator">Github</a>
          <a href="">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Strata & Structures Company Website.</h3>
          <a href="https://github.com/siegfred14/strata-and-structures">
            Github
          </a>
          <a href="">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Python ATM Application</h3>
          <a href="https://github.com/siegfred14/AtmMockUpApp">Github</a>
          <a href="">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>
            I led a team to develop this private project for a company. It is an
            API for an E-Commerce application.
          </h3>
          <a href="https://github.com/siegfred14/Belleda-be-pjt-17">Github</a>
          <a href="">Live Demo</a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
