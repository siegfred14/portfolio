import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMessenger } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Reach out today, make a</h5>
      <h2>contact</h2>

      <div className="contact_container container">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card_icon"></i>

              <h3 className="contact_card_title">e-mail</h3>
              <h5 className="contact_card_data">siegfredsamson@gmail.com</h5>

              <a
                href="mailto:siegfredsamson@gmail.com"
                className="contact_button"
                target="_blank"
              >
                Write Me{" "}
                <i className="bx bxs-right-arrow-alt bx-sm bx-fade-right contact_button_icon"></i>
              </a>
            </div>

            <div className="contact_card">
              {/* <i className="bx bxl-whatsapp contact_card-icon"></i> */}
              <IoLogoWhatsapp className="contact_card_icon" />

              <h3 className="contact_card_title">Whatsapp</h3>
              <h5 className="contact_card_data">+234 803 619 2916</h5>

              <a
                href="https://api.whatsapp.com/send?phone=+2348036192916"
                className="contact_button"
                target="_blank"
              >
                Write Me{" "}
                <i className="bx bxs-right-arrow-alt bx-sm bx-fade-right contact_button_icon"></i>
              </a>
            </div>

            <div className="contact_card">
              {/* <i className="bx bxl-messenger contact_card_icon"></i> */}
              <SiMessenger className="contact_card_icon" />

              <h3 className="contact_card_title">Messenger</h3>
              <h5 className="contact_card_data">Siegfred Samson</h5>

              <a
                href="https://m.me/siegfreds"
                className="contact_button"
                target="_blank"
              >
                Write Me{" "}
                <i className="bx bxs-right-arrow-alt bx-sm bx-fade-right contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Your project</h3>

          <form action="" className="contact_form">
            <div className="contact_form_div">
              <label htmlFor="name" className="contact_form_tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact_form_input"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact_form_div">
              <label htmlFor="email" className="contact_form_tag">
                Email
              </label>
              <input
                type="email"
                name="name"
                className="contact_form_input"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact_form_div">
              <label htmlFor="project" className="contact_form_tag">
                Project
              </label>
              <textarea
                name="project"
                // cols="30"
                rows="7"
                type="text"
                className="contact_form_input"
                placeholder="Describe your project"
                required
              >
                Write your project
              </textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
