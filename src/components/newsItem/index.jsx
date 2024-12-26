import React from "react";
import { Link } from "react-router-dom";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const NewsItem = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <div className='newsCard'>
      <div className='cardContainer'>
        <div className='cardImage'>
          <img
            src={props?.newsData?.image}
            alt='image'
            className='img'
          />
        </div>
        <div className='cardContent'>
          <div className='contentTitle'>
            <h4 className='title'>{props?.newsData?.title?.[lang]}</h4>
          </div>
          <div className='contentText'>
            <p className='text'>{props?.newsData?.text?.[lang]}</p>
          </div>
        </div>
        <div className='contentSeeMore'>
          <Link
            to={`/news/${props?.newsData?.id}`}
            className='link'
          >
            {t("blocks.news.seeMore")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
