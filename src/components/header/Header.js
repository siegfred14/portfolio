import React from "react";
import CTA from "./CTA";
import photo from "../../img/photo-one.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Siegfred Samson</h1>
        <h4 className="text-red">Front End Developer</h4>
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
