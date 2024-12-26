import React from "react";
import aboutHero from "../../assets/15.jpg";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const ProjectsHero = () => {
  const { t } = useTranslation();
  return (
    <div className='projectHero'>
      <div className='projectHeroImage'>
        <img
          src={aboutHero}
          alt='aboutHero'
          className='img'
        />
      </div>
      <div className='projectHeroContent'>
        <div className='container'>
          <div className='contentContainer'>
            <div className='contentTitle'>
              <h2 className='title'> {t("blocks.product.title")}</h2>
            </div>
            <div className='contentSubtitle'>
              <p className='subtitle'> {t("blocks.product.subtitle")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
