import React from "react";
import aboutHero from "../../assets/13.jpg";
import { useTranslation } from "react-i18next";
import "./styles.sass";

const ResourcesHero = () => {
  const { t } = useTranslation();
  return (
    <div className='resourcesHero'>
      <div className='resourcesHeroImage'>
        <img
          src={aboutHero}
          alt='resourcesHero'
          className='img'
        />
      </div>
      <div className='resourcesHeroContent'>
        <div className='container'>
          <div className='contentContainer'>
            <div className='contentTitle'>
              {/* <h2 className='title'>{t("blocks.pageAbout.aboutHero.title")}</h2> */}
              <h2 className='title'>Ресурсы</h2>
            </div>
            <div className='contentSubtitle'>
              <p className='subtitle'>Находите полезные ресурсы от нашей команды</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHero;
