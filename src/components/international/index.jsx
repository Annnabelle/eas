import React from "react";
import "./styles.sass";
import InternationalSlider from "./internationalSlider";
import { useTranslation } from "react-i18next";

const International = () => {
  const { t } = useTranslation();
  return (
    <section className='international'>
      <div className='container'>
        <div className='internationalContainer'>
          <div className='internationalContent'>
            <div className='contentTitle'>
              <h4 className='title'>{t("blocks.pageAbout.international.title")}</h4>
            </div>
            <div className='contentSubtitle'>
              <p className='subtitle'>{t("blocks.pageAbout.international.subtitle")}</p>
            </div>
          </div>
          <div className='internationalSlider'>
            <InternationalSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default International;
