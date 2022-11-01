import React from "react";
import "./about.css";
import img from "../../img/about/about_1.png";
import img2 from "../../img/about/about_2.jpg";
import img3 from "../../img/about/about_3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  let collageImages = [...document.querySelectorAll(".collage-img")];

  collageImages.map((item, i) => {
    item.addEventListener("mouseover", () => {
      collageImages.map((image, index) => {
        if (index !== i) {
          image.style.filter = "blur(10px)";
          item.style.zIndex = 2;
        }
      });
    });
    item.addEventListener("mouseleave", () => {
      collageImages.map((image) => {
        image.style = null;
      });
    });
  });

  // const imageSwitch = () => {
  //   let collageImages = [...document.querySelectorAll(".collage-img")];

  //   for (let i in collageImages) {
  //     if (collageImages[i].onMouseEnter()) {
  //       collageImages.style.zIndex = 4;
  //       // collageImages[i].style.filter = "blur(10px)"
  //     }
  //   }

  // collageImages.map((item, i) => {
  //   item.onMouseOver(() => {
  //     collageImages.map((image, index) => {
  //       if (index !== i) {
  //         return (image.style.filter = "blur(10px)"), (item.style.zIndex = 2);
  //       }
  //       return image;
  //     });
  //     return item;
  //   });
  //   item.onMouseLeave(() => {
  //     collageImages.map((image) => {
  //       return (image.style = null);
  //     });
  //   });
  // });
  // };

  return (
    <section id="about">
      <h5>Get Conversant!</h5>
      <h2>Know About Me</h2>

      <div className="container about_container">
        <div className="about_content">
          <p>
            I am a <span>Frontend Developer</span>, working in the branch of
            technology that includes the development of computer web
            applications.
            <br /> Possessing a <span>Computer Science</span> degree, I draw
            from my knowledge of engineering and math to source information,
            write, edit, test, and debug web programs and applications.
            <br />I am comfortably a team player who pays attention to detail,
            is decision-oriented and result-driven, possesses great
            interpersonal and work relationship, communicating fluently in{" "}
            <span>English</span> and <span className="french">French</span>
          </p>

          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3 years excess</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
        </div>

        <div class="image-collage">
          <div class="image-collection">
            <img src={img} alt="loading..." class="collage-img img1" />
            <img src={img2} alt="loading..." class="collage-img img2" />
            <img src={img3} alt="loading..." class="collage-img img3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
