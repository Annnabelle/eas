import React from "react";
import aboutHero from "../../assets/13.jpg";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <div className='aboutHero'>
      <div className='aboutHeroImage'>
        <img
          src={aboutHero}
          alt='aboutHero'
          className='img'
        />
      </div>
      <div className='aboutHeroContent'>
        <div className='container'>
          <div className='contentContainer'>
            <div className='contentTitle'>
              <h2 className='title'>{t("blocks.pageAbout.aboutHero.title")}</h2>
            </div>
            <div className='contentSubtitle'>
              <p className='subtitle'>{t("blocks.pageAbout.aboutHero.subtitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
