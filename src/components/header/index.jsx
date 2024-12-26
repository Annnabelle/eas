import React, { useState } from "react";
import logo from "../../assets/easLogo.png";
import NavBar from "./navbar";
import "./styles.sass";
import Languages from "../languages";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isNotMainPage =
    location.pathname === "/about" ||
    location.pathname === "/products" ||
    location.pathname === "/news" ||
    location.pathname === "/projects" ||
    /^\/news\/\d+$/.test(location.pathname) ||
    /^\/article\/\d+$/.test(location.pathname);

  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const toggleMenu = (toOpen) => {
    setBurgerIsOpen(toOpen);
  };

  return (
    <header className={`header  ${burgerIsOpen ? "activeHeader" : ""}`}>
      <div className='headerItems'>
        <div className='headerItem'>
          <div className='container'>
            <a
              href='/'
              className='headerLogo'
            >
              <img
                src={logo}
                alt='walterLogo'
                className='logo'
              />
            </a>
          </div>
        </div>
        <div className='headerItem mainBgColor'>
          <span
            className={`mobileOverlay ${burgerIsOpen ? "activeMenu" : ""}`}
            onClick={(e) => toggleMenu(false)}
          ></span>
          <NavBar
            burgerIsOpen={burgerIsOpen}
            toggleMenu={toggleMenu}
            isNotMainPage={isNotMainPage}
          />
          <Languages />
          <div
            className='burgerBtnContainer'
            onClick={() => toggleMenu(!burgerIsOpen)}
          >
            <div className={`burgerBtn ${burgerIsOpen ? "active" : ""}`}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
