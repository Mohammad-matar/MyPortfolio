import React from 'react'
import './style.css'

export default function Navbar() {
    return (
        <div className='container'>
            <nav className='main_navbar'>
                <div className='nav_name'>
                    <p>
                        Mohammad Matar
                    </p>
                </div>
                <div className="navbar" id="myTopnav">
                    <ul>
                        <li> <a href="#about">About Me</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}
