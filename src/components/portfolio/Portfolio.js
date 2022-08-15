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
          <small>
            I Created A Meteorological Application, Which Fetches From API To
            Supply Real-Time Climatic Information On Global Cities.
          </small>
          <a href="https://github.com/siegfred14/meteorologyWebApp">Github</a>
          <a href="#">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <small>An E-Commerce Web Application For A Trading Firm.</small>
          <a href="https://github.com/siegfred14/jsOnlineStore">Github</a>
          <a href="#">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <small>Simple React Calculator.</small>
          <a href="https://github.com/siegfred14/react-calculator">Github</a>
          <a href="">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <small>Strata & Structures Company Website.</small>
          <a href="https://github.com/siegfred14/strata-and-structures">
            Github
          </a>
          <a href="">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <small>Python ATM Application</small>
          <a href="https://github.com/siegfred14/AtmMockUpApp">Github</a>
          <a href="">Live Demo</a>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <small>
            I led a team to develop this private project for a company. It is an
            API for an E-Commerce application.
          </small>
          <a href="https://github.com/siegfred14/Belleda-be-pjt-17">Github</a>
          <a href="">Live Demo</a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
