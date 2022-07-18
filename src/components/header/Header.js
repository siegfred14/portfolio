import React from "react";
import CTA from "./CTA";
import photo from "../../img/photo-one.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Siegfred Samson</h1>
        <h3 className="text-red">Front End Developer</h3>
        <CTA />
        <HeaderSocials />

        <figure className="header_photo">
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
