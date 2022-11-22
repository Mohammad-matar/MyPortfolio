import React from "react";
import { FaLinkedin, FaGitlab, FaAngleDoubleUp } from "react-icons/fa";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_section">
        <div className="footer_backToTop">
          <a href="#about">
            <FaAngleDoubleUp />
          </a>
          <span className="back_to_top">Back to top</span>
        </div>
        <ul className="footer_icons">
          <li>
            <a href="https://github.com/Mohammad-matar" target={"blank"}>
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohamad-matar-824562230/"
              target={"blank"}
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/mohammad.matar.984/"
              target={"blank"}
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://gitlab.com/moe.matar1998" target={"blank"}>
              <FaGitlab />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/mata_rov?igshid=YmMyMTA2M2Y="
              target={"blank"}
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
        <p className="copyright">Copyright to Mohamad Matar ©2022</p>
      </div>
    </footer>
  );
}