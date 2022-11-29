import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "./style.css";

export default function Contact() {
  //sendemail function
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "contact_page", form.current, "w6Z2NmSAlwHuGkt_Z")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section id="contact" className="contact_section">
      <div className="contact_title">
        <h2>Contact Me!</h2>
      </div>
      <div className="contact">
        <div className="contact_form">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              className="input bordered"
              type="text"
              name="name"
              required
              placeholder="Your name... *"
            />
            <input
              className="input bordered"
              type="email"
              name="email"
              required
              placeholder="Your email... *"
            />
            <textarea
              id="text-area"
              className="bordered"
              name="message"
              placeholder="Your message... *"
              rows="5"
              cols="50"
            ></textarea>
            <button className="submit-btn" type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
        <div className="contact_info">
          <ul className="contact_links">
            <li className="contact_item">
              <FaPhoneAlt className="contact-phone" fontSize={40} />
              <a href="tel:+96171728733">+961 71 728 733</a>
            </li>
            <li className="contact_item">
              <FaRegEnvelope className="contact-message" fontSize={40} />
              <a href="mailto:moe.matar1998@gmail.com">
                moe.matar1998@gmail.com
              </a>
            </li>

            <li className="contact_item">
              <FaMapMarkerAlt className="contact-location" fontSize={40} />
              <a href="#"> Tripoli, Lebanon</a>
            </li>
          </ul>
          <hr />
          <div className="contact_logo">
            <a href="https://wa.me/96171728733?text=Hello%20matarovv%20">
              <FaWhatsapp className="icon whatsapp-icon" />
            </a>
            <a href="https://www.facebook.com/mohammad.matar.984">
              <BsFacebook className="icon facebook-icon" />
            </a>
            <a href="#">
              <BsGithub className="icon github-icon" />
            </a>
            <a href="#">
              <FaLinkedin className="icon linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}