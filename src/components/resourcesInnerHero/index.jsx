import React from "react";
import aboutHero from "../../assets/13.jpg";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const ResourcesInnerHero = () => {
  const { t } = useTranslation();
  return (
    <div className='resourcesInnerHero'>
      <div className='resourcesInnerHeroImage'>
        <img
          src={aboutHero}
          alt='aboutHero'
          className='img'
        />
      </div>
      <div className='resourcesInnerHeroContent'>
        <div className='container'>
          <div className='contentContainer'>
            <div className='contentTitle'>
              {/* <h2 className='title'>{t("blocks.pageAbout.aboutHero.title")}</h2> */}
              <h2 className='title'>Применение EAS-1 "FOWLER" в деле </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesInnerHero;
