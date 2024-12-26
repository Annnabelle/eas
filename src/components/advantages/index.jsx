import React from "react";
import { GoGraph } from "react-icons/go";
import { MdOutlineContactMail } from "react-icons/md";
import { IoReload } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { PiFlag } from "react-icons/pi";

import advantages from "../../assets/2.jpg";

import "./styles.sass";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation();
  const advantagesItems = [
    { id: 1, icon: <GoGraph />, text: t("blocks.advantages.advantagesOne") },
    { id: 2, icon: <MdOutlineContactMail />, text: t("blocks.advantages.advantagesTwo") },
    { id: 3, icon: <IoReload />, text: t("blocks.advantages.advantagesThree") },
    { id: 4, icon: <FaRegBookmark />, text: t("blocks.advantages.advantagesFour") },
    { id: 5, icon: <MdDesignServices />, text: t("blocks.advantages.advantagesFive") },
    { id: 6, icon: <PiFlag />, text: t("blocks.advantages.advantagesSix") },
  ];
  return (
    <section className='advantages'>
      <div className='container'>
        <div className='advantagesContainer'>
          <div className='advantagesContent'>
            <div className='contentHeading'>
              <div className='advantagesTitle'>
                <h2 className='title'> {t("blocks.advantages.title")}</h2>
              </div>
              <div className='advantagesSubtitle'>
                <p className='subtitle'>{t("blocks.advantages.text")}</p>
              </div>
            </div>
            <div className='contentAdvantages'>
              {advantagesItems?.map((item) => (
                <div
                  className='advantagesItems'
                  key={item?.id}
                >
                  <div className='itemIcon'>{item?.icon}</div>
                  <div className='itemText'>
                    <p className='text'> {item?.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='advantagesImagesItems'>
            <div className='itemImage'>
              <img
                src={advantages}
                alt='advantages'
                className='img'
              />
            </div>
            <div className='itemImageBg'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
