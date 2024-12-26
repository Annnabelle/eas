import React from "react";
import "./styles.sass";
import NewsSlider from "./newsSlider";
import { useTranslation } from "react-i18next";

const NewsSection = (props) => {
  const { t } = useTranslation();
  return (
    <section className='newsSection'>
      <div className='container'>
        <div className='newsSectionContainer'>
          <div className='newSectionTitle'>
            <h2 className='title'>{t("blocks.news.title")}</h2>
          </div>
          <div className='newSectionSlider'>
            <NewsSlider firstSix={props?.firstSix} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
