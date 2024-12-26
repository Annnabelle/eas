import React from "react";
import { Link } from "react-router-dom";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const ProductItem = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <div className='productItem'>
      <div className='cardContainer'>
        <div className='cardContent'>
          <div className='cardImage'>
            <img
              src={props?.productItem?.image}
              alt='image'
              className='img'
            />
          </div>
          <div className='contentTitle'>
            <h4 className='title'>{props?.productItem?.title}</h4>
          </div>
          <div className='contentText'>
            <p className='text'>{props?.productItem?.text?.[lang]}</p>
          </div>
        </div>
        <div className='contentSeeMore'>
          <Link
            to={`/project/${props?.productItem?.id}`}
            className='link'
          >
            {t("blocks.product.seeAll")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
