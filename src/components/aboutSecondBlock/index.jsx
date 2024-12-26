import React from "react";
import logo from "../../assets/aboutLogo.png";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const AboutSecondBlock = () => {
  const { t } = useTranslation();
  return (
    <section className='aboutSection'>
      <div className='aboutMainBlock'>
        <div className='container'>
          <div className='aboutText'>
            <p className='text'>{t("blocks.pageAbout.aboutSecondBlock.leftText")}</p>
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
            <p className='text'>{t("blocks.pageAbout.aboutSecondBlock.rightText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecondBlock;
