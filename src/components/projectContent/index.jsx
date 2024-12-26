import React from "react";
import projectInnerImage from "../../assets/projectInnerImage.png";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const ProjectContent = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <section className='projectContent'>
      <div className='container'>
        <div className='projectContentContainer'>
          <div className='projectContentInfo'>
            <div className='projectContentInfoContainer'>
              <div className='projectContentTitle'>
                <h4 className='title'>{props?.newProductData?.title}</h4>
              </div>
              <div className='infoText'>
                <p className='text'>{props?.newProductData?.text?.[lang]}</p>
              </div>
            </div>
            <div className='infoImage'>
              <img
                src={props?.newProductData?.image}
                className='img'
                alt='projectInnerImage'
              />
            </div>
          </div>
          <div className='description'>
            {props?.newProductData?.description?.map((item) => (
              <div
                className='descriptionContainer'
                key={item?.id}
              >
                <div className='descriptionTitle'>
                  <h5 className='title'>{item?.title?.[lang]}</h5>
                </div>
                <div className='descriptionList'>
                  <ul className='list'>
                    {item.text?.[lang].map((item) => (
                      <li
                        // key={index}
                        className='listItem'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
