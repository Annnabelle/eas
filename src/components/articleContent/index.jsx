import React from "react";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const ArticleContent = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <section className='articleContent'>
      <div className='container'>
        <div className='articleContainer'>
          <div className='contentImage'>
            {props?.newArticleData?.video ? null : (
              <img
                src={props?.newArticleData?.image}
                alt='articleContentImage'
                className='img'
              />
            )}
            {props?.newArticleData?.video ? (
              <video
                src={props?.newArticleData?.video}
                autoPlay
                loop
                muted
                controls
                className='img'
              />
            ) : null}
          </div>
          <div className='contentItems'>
            <div className='contentTitle'>
              <h3 className='title'>{props?.newArticleData?.title?.[lang]}</h3>
            </div>
            <div className='contentText'>
              <p className='text'>{props?.newArticleData?.text?.[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleContent;
