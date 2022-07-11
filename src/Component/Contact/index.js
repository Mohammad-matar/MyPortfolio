

import {
    FaPhoneAlt,
    FaRegEnvelope,
    FaWhatsapp,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { BsFacebook, BsGithub } from "react-icons/bs";
// import emailjs from "@emailjs/browser";
import React from 'react'
import './style.css'


export default function Contact() {
    return (
        <section id='contact'>
            <div className="section contact-main ">
                <div className="title">
                    <h1>Contact Me!</h1>
                    <h2>
                        Want a website for your brand and business? <br /> I design what you
                        desire....
                    </h2>
                </div>
                <div className="contact">
                    <div className="contact-section">
                        <form className="form-section">
                            <input
                                className="input-name"
                                type="text"
                                name="from_name"
                                required
                                placeholder="ENTER YOUR NAME*"
                            />

                            <input
                                className="input-email"
                                type="email"
                                name="email"
                                required
                                placeholder="ENTER YOUR EMAIL*"
                            />

                            <input
                                className="input-number"
                                type="tel"
                                name="phone"
                                required
                                placeholder="PHONE NUMBER*"
                            />
                            <textarea
                                id="text-are"
                                name="message"
                                placeholder="YOUR MESSAGE*"
                                rows="5"
                                cols="50"
                            ></textarea>
                            <button className="submit-btn">Submit</button>
                        </form>
                    </div>
                    <div className="links">
                        <div className="contact-links">
                            <div className="contact-form">
                                <div className="contact-item">
                                    <a href="#">
                                        <FaPhoneAlt className="contact-phone" fontSize={40} />
                                    </a>
                                    <a href="#">
                                        <h3>+961 71 728 733</h3>
                                    </a>
                                </div>
                                <div class="contact-item">
                                    <a href="#">
                                        <FaRegEnvelope className="contact-message" fontSize={40} />
                                    </a>
                                    <a href="#">
                                        <h3>moe.matar1998@gmail.com</h3>
                                    </a>
                                </div>
                                <div class="contact-item">
                                    <a href="#">
                                        <FaMapMarkerAlt
                                            className="contact-location"
                                            fontSize={40}
                                        />
                                    </a>
                                    <a href="#">
                                        <h3>Tripoli, Lebanon</h3>
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div class="contact-icon-logo">
                                <a href="#">
                                    <FaWhatsapp className="whatsapp-icon" />
                                </a>

                                <a href="#">
                                    <BsFacebook className="facebook-icon" />
                                </a>

                                <a href="#">
                                    <BsGithub className="github-icon" />
                                </a>

                                <a href="#">
                                    <FaLinkedin className="linkedin-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
