import React from 'react';
import {
    FaWhatsapp,
    FaLinkedin,
    FaGitlab,
} from "react-icons/fa";
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import './style.css';

export default function Footer() {
    return (
        <footer>
            <ul>
                <li> Linkedin</li>
                <li> Github</li>
                <li> Facebook</li>
                <li> GitLab</li>
                <li> Instagram</li>
            </ul>
            <div className='footer_icons'>
                <a href='https://github.com/Mohammad-matar' target={'blank'}> < BsGithub /> </a>
                <a href='https://www.linkedin.com/in/mohamad-matar-824562230/' target={'blank'}> <FaLinkedin /></a>
                <a href='https://www.facebook.com/mohammad.matar.984/' target={'blank'}> < BsFacebook /></a>
                <a href='https://gitlab.com/moe.matar1998' target={'blank'}> <FaGitlab /></a>
                <a href='https://instagram.com/mata_rov?igshid=YmMyMTA2M2Y=' target={'blank'}> <BsInstagram /></a>

            </div>
            <div className='copyright'>
                Copyright © 2022 Office
            </div>
        </footer>
    )
}
