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
          <h3>Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx contact_card-icon"></i>

              <h3 className="contact_card_title">e-mail</h3>
              <span className="contact_card_data">
                siegfredsamson@gmail.com
              </span>

              <a
                href="mailto:siegfredsamson@gmail.com"
                className="contact_button"
              >
                Write Me{" "}
                <i className="bx bxs-right-arrow-alt bx-sm bx-fade-right-hover contact_button_icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bx contact_card-icon"></i>

              <h3 className="contact_card_title">Whatsapp</h3>
              <span className="contact_card_data">+234 803 619 2916</span>

              <a href="" className="contact_button">
                Write Me{" "}
                <i className="bx bxs-right-arrow-alt bx-sm bx-fade-right-hover contact_button_icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bx contact_card-icon"></i>

              <h3 className="contact_card_title">Messenger</h3>
              <span className="contact_card_data">m.me/siegfreds</span>

              <a href="https://m.me/siegfreds" className="contact_button">
                Write Me{" "}
                <i className="bx bxs-right-arrow-alt bx-sm bx-fade-right-hover contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Your project</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;
