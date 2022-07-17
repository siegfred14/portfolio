import React from "react";
import resume from "./../../docs/CV_Siegfred.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} download>
        Download CV
      </a>
      <a href="#contact">Let's Talk</a>
    </div>
  );
};

export default CTA;
