import React from "react";
import "./Header.css";
import facebook from "../Header/imgHeader/facebook.webp";
import twiter from "../Header/imgHeader/twiter.webp";
import logo from "../Header/imgHeader/logo.jpg";
import { useState } from "react";

// const setNavLinkClass = ({ isActive }) => (isActive ? "nav-link" : "menu-link");
let lastScroll = 0;
const defaultOffset = 300;

window.onscroll = function headerChanger() {
  const scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.classList.contains("hide");
  const header = document.querySelector(".header");
  // const scrolledDown = document.querySelector(".scrolledDown");
  const headerMenu1 = document.querySelector(".headerMenu");
  const burgerActive = () => headerMenu1.classList.contains("active");
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset &&
    !burgerActive()
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  }

  lastScroll = scrollPosition();
  if (scrollPosition() > defaultOffset) {
    header.classList.add("scrolledDown");
  } else if (scrollPosition() < defaultOffset) {
    header.classList.remove("scrolledDown");
  }
};

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          {/* <NavLink className={setNavLinkClass} to="/"> */}
          <img alt="logo" src={logo} />

          {/* </NavLink> */}
        </div>

        <div className="position">
          <div className={menuActive ? "headerMenu active" : "headerMenu"}>
            <ul>
              <li>
                {/* <NavLink className={setNavLinkClass} to="/"> */}
                Home
                {/* </NavLink> */}
              </li>
              <li>
                {/* <NavLink className={setNavLinkClass} to="/about"> */}
                About
                {/* </NavLink> */}
              </li>
              <li>Subscribe</li>
              <div className="socialBut1">
                <img alt="twiter" src={twiter}></img>
                <img alt="facebook" src={facebook}></img>
              </div>
            </ul>
          </div>
          <div className="socialBut">
            <img alt="twiter" src={twiter}></img>
            <img alt="facebook" src={facebook}></img>
          </div>
          <div
            className="headerBurger"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};
