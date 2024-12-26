import React from "react";
import certificatesImage from "../../assets/certificatesImage.png";
import "./styles.sass";
import { useTranslation } from "react-i18next";
const Certificates = () => {
  const { t } = useTranslation();
  return (
    <section className='certificates'>
      <div className='container'>
        <div className='certificatesContainer'>
          <div className='certificatesContent'>
            <div className='contentTitle'>
              <h3 className='title'>{t("blocks.pageAbout.certificates.title")}</h3>
            </div>
            <div className='contentSubtitle'>
              <p className='subtitle'>{t("blocks.pageAbout.certificates.subtitle")}</p>
            </div>
          </div>
          <div className='certificatesImage'>
            <img
              src={certificatesImage}
              alt='certificatesImage'
              className='img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
