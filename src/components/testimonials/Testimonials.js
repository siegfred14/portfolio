import React from "react";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Client Review</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // slidesPerView={1}
        loop={true}
        grabCursor={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            // spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, title, image, comment }) => {
          return (
            <SwiperSlide className="testimonial_card" key={id}>
              <div className="client_avatar">
                <img src={image} alt={title} />
              </div>
              <h3 className="client_name">{title}</h3>
              <small className="client_review">{comment}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
