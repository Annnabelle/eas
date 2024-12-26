import React from "react";
import heroImage from "../../assets/introHero.png";
import Button from "../button";
import "./styles.sass";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MainHero = () => {
  const { t } = useTranslation();
  return (
    <section className='hero'>
      <div className='heroImage'>
        <img
          src={heroImage}
          alt='heroImage'
          className='img'
        />
      </div>
      <div className='mainHero'>
        <div className='mainHeroContainer'>
          <div className='container'>
            <div className='heroContent'>
              <div className='heroTitle'>
                <h1 className='title'>{t("blocks.mainHero.heroTitle")}</h1>
              </div>
              <div className='heroSubtitle'>
                <p className='subtitle'>{t("blocks.mainHero.heroSubtitle")}</p>
              </div>
              <div className='heroCallBtn'>
                <a
                  href='#contact'
                  className='link'
                >
                  <Button>{t("blocks.buttons.contactUs")}</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
