import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosMenu, IoMdClose } from "react-icons/io"
import "./style.css";
// import logo from '../../img/logo.png';


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    return (
      <header className="header__middle">
        <div className="container">
          <div className="row">
            {/* Add Logo  */}
            <div className="header__middle__logo">
              <NavLink exact activeClassName="is-active" to="/">
                <img src="" alt="logo" />
              </NavLink>
            </div>

            <div className="header__middle__menus">
              <nav className="main-nav ">
                {/* Responsive Menu Button */}
                {isResponsiveclose === true ? (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <IoMdClose />{" "}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      className="menubar__button"
                      style={{ display: "none" }}
                      onClick={toggleClass}
                    >
                      {" "}
                      <IoIosMenu />{" "}
                    </span>
                  </>
                )}

                <ul className={boxClass.join(" ")}>
                  <li className="menu-item">
                    {" "}
                    <a href="#about">About Me</a>
                  </li>
                  <li className="menu-item">
                    <a href="#experience">Experience</a>
                  </li>
                  <li className="menu-item">
                    <a href="#skills">Skills</a>
                  </li>
                  <li className="menu-item">
                    <a href="#projects">Projects</a>
                  </li>
                  <li className="menu-item">
                    <a href="#contact">Contact Me</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbarmenu