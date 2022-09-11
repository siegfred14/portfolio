import React, { useRef, useState } from "react";
import "./contact.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMessenger } from "react-icons/si";
import { BsCheckLg } from "react-icons/bs";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState(undefined);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oxj81np",
        "template_djs37jg",
        form.current,
        "JHACbkxHJ1rQKO4Yz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ type: "success" });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus({ type: "error", error });
        }
      );
  };

  // alertMsg = () => {
  //   return setTimeout(() => {
  //     <p className="status_msg msg1">"Message Sent!"</p>;
  //   }, 3000);
  // };

  return (
    <section id="contact">
      <h5>Reach out today</h5>
      <h2>Contact Me</h2>

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
          <h3 className="contact_title contact_title_two">Your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact_form">
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

            <div className="contact_form_div contact_form_area">
              <label htmlFor="project" className="contact_form_tag">
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                type="text"
                className="contact_form_input"
                placeholder="Describe your project"
                required
              />
            </div>

            {status?.type === "success" && (
              <div className="status_msg">
                <BsCheckLg className="msg_logo1" />
                <p>"Message Sent!"</p>
                <button className="toggle">close</button>
              </div>
            )}
            {status?.type === "error" && (
              // <p className="status_msg msg2">"Message Not Sent Try Again!"</p>
              <div className="status_msg">
                <MdOutlineReportGmailerrorred className="msg_logo2" />
                <p>"Message Not Sent Try Again!"</p>
                <button className="toggle">close</button>
              </div>
            )}

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
