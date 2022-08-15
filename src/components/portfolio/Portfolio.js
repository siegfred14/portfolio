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
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>An E-Commerce Web Application For A Trading Firm.</h3>
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
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Simple React Calculator.</h3>
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
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Strata & Structures Ltd Website.</h3>
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
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Python ATM Application</h3>
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
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Belleda Fashion App</h3>
          {/* <div className="content">
            <small>
              I led a team to develop this private project for a company. It is
              an API for an E-Commerce application.
            </small>
          </div> */}
          <a
            href="https://github.com/siegfred14/Belleda-be-pjt-17"
            className="btn"
            target="_blank"
          >
            Github
          </a>
          <a href="" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
