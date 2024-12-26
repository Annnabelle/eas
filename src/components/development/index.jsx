import React from "react";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const Development = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const developmentItems = [
    {
      id: 1,
      year: "2022",
      listItem: [
        { id: 1, text: t("blocks.pageAbout.development.one.textOne") },
        { id: 2, text: t("blocks.pageAbout.development.one.textTwo") },
        {
          id: 3,
          text: t("blocks.pageAbout.development.one.textThree"),
        },
      ],
    },
    {
      id: 2,
      year: "2023",
      listItem: [
        {
          id: 1,
          text: t("blocks.pageAbout.development.two.textOne"),
        },
        {
          id: 2,
          text: t("blocks.pageAbout.development.two.textTwo"),
        },
        {
          id: 3,
          text: t("blocks.pageAbout.development.two.textThree"),
        },
        {
          id: 4,
          text: t("blocks.pageAbout.development.two.textFour"),
        },
        {
          id: 5,
          text: t("blocks.pageAbout.development.two.textFive"),
        },
      ],
    },
    {
      id: 3,
      year: "2024",
      listItem: [
        {
          id: 1,
          text: t("blocks.pageAbout.development.three.textOne"),
        },
        {
          id: 2,
          text: t("blocks.pageAbout.development.three.textTwo"),
        },
        {
          id: 3,
          text: t("blocks.pageAbout.development.three.textThree"),
        },
        {
          id: 4,
          text: t("blocks.pageAbout.development.three.textFour"),
        },
        {
          id: 5,
          text: t("blocks.pageAbout.development.three.textFive"),
        },
      ],
    },
    {
      id: 4,
      year: "2025-2030",
      className: "last",
      listItem: [
        { id: 1, text: t("blocks.pageAbout.development.four.textOne") },
        {
          id: 2,
          text: t("blocks.pageAbout.development.four.textTwo"),
        },
        {
          id: 3,
          text: t("blocks.pageAbout.development.four.textThree"),
        },
        {
          id: 4,
          text: t("blocks.pageAbout.development.four.textFour"),
        },
      ],
    },
  ];
  return (
    <section className='development'>
      <div className='container'>
        <div className='developmentContainer'>
          <div className='developmentTitle'>
            <h3 className='title'> {t("blocks.pageAbout.development.title")}</h3>
          </div>
          {developmentItems?.map((item) => (
            <div
              className='developmentItems'
              key={item?.id}
            >
              <div className={`developmentYears ${item?.className}`}>
                <p className='year'>{item?.year}</p>
              </div>
              <div className='developmentList'>
                <ol className='list'>
                  {item?.listItem?.map((listText) => (
                    <li
                      className='items'
                      key={listText?.id}
                    >
                      {listText?.text}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Development;
