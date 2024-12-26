import React from "react";
import easBg from "../../assets/17.jpg";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const NewsHero = () => {
  const { t } = useTranslation();
  return (
    <section className='newsHero'>
      <div className='newsHeroImage'>
        <img
          src={easBg}
          alt='easBg'
          className='img'
        />
      </div>
      <div className='backdropFilter'></div>
      <div className='newsHeroContent'>
        <div className='container'>
          <div className='newsHeroTitle'>
            <h3 className='title'>{t("blocks.navigation.news")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
