import React from "react";
import logo from "../../assets/aboutLogo.png";
import "./styles.sass";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className='aboutSection'>
      <div className='aboutMainBlock'>
        <div className='container'>
          <div className='aboutText'>
            <p className='text'>{t("blocks.mainAbout.mainAboutLeft")}</p>
          </div>
        </div>
      </div>
      <div className='aboutSectionLogo'>
        <img
          src={logo}
          alt='logo'
          className='img'
        />
      </div>
      <div className='aboutBlock'>
        <div className='container'>
          <div className='aboutText'>
            <p className='text'>{t("blocks.mainAbout.mainAboutRight")}</p>
          </div>
          <Link
            to='/about'
            className='link'
          >
            {t("blocks.buttons.additionalInfo")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
