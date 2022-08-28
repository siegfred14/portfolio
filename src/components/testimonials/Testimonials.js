import React from "react";
import { Data } from "./Data";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Client Review</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {Data.map(({ id, title, image, comment }) => {
          return (
            <article className="testimonial_card" key={id}>
              <div className="client_avatar">
                <img src={image} alt={title} />
              </div>
              <h3 className="client_name">{title}</h3>
              <small className="client_review">{comment}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
