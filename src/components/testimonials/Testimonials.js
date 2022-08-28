import React from "react";

import IMG1 from "../../img/testimonial/abraham.png";
import IMG2 from "../../img/testimonial/chioma.png";
import IMG3 from "../../img/testimonial/amen.png";

let data = [
  {
    id: 1,
    name: "Yunana Abraham",
    image: IMG1,
    comment:
      "The website you built for us has increased our online presence and hence ameliorated our ease of business. Strangers are now more comfortable to engage in first time deals ",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Client Review</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src="" alt="Avatar One" />
            <h5 className="client_name">mr Jason</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              reprehenderit ab, ducimus nemo sapiente nam nisi totam accusantium
              ad, consequuntur suscipit enim cumque repellendus asperiores!
              Officiis deleniti velit totam accusamus.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
