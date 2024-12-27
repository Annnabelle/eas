import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavBar = ({ burgerIsOpen, toggleMenu, isNotMainPage }) => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    toggleMenu(false);
  };

  return (
    <nav className={`nav ${burgerIsOpen ? "activeMenu" : ""}`}>
      <div className='navContainer'>
        <div className='navBox'>
          <div className='links'>
            <Link
              className='navLink'
              to='/'
              onClick={handleLinkClick}
            >
              {t("blocks.navigation.main")}
            </Link>
            <Link
              className='navLink'
              to='/about'
              onClick={handleLinkClick}
            >
              {t("blocks.navigation.about")}
            </Link>
            <Link
              className='navLink'
              to='/products'
              onClick={handleLinkClick}
            >
              {t("blocks.navigation.products")}
            </Link>
            <Link
              className='navLink'
              to='/news'
              onClick={handleLinkClick}
            >
              {t("blocks.navigation.news")}
            </Link>
            {!isNotMainPage ? (
              <a
                className='navLink'
                href='#contact'
                onClick={handleLinkClick}
              >
                {t("blocks.navigation.contacts")}
              </a>
            ) : (
              <Link
                className='navLink'
                to='/#contact'
                onClick={handleLinkClick}
              >
                {t("blocks.navigation.contacts")}
              </Link>
            )}
            <Link
              className='navLink'
              to='/blog'
            >
              Блог
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
