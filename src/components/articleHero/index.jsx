import React from "react";
import easBg from "../../assets/easBg.png";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const ArticleHero = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <section className='articleHero'>
      <div className='articleHeroImage'>
        <img
          src={props?.newArticleData?.image}
          alt='easBg'
          className='img'
        />
      </div>
      <div className='backdropFilter'></div>
      <div className='articleHeroContent'>
        <div className='container'>
          <div className='articleHeroTitle'>
            <h3 className='title'>{props?.newArticleData?.title?.[lang]}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
