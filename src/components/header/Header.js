import React from "react";
import CTA from "./CTA";
import photo from "../../img/photo-one.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Siegfred Samson</h1>
        <h5 className="text-red">Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <figure>
          <img src={photo} alt="photo" />
        </figure>

        <a href="#contact" className="scroll_down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
