import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import logo from "../../assets/easLogo.png";
import FAQ from "../faq";
import "./styles.sass";

const Footer = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footerContainer'>
          <div className='footerItems'>
            <div className='footerLogo'>
              <img
                src={logo}
                alt='logo'
              />
            </div>
            <div className='footerTitle'>
              <h3 className='title'> ELECTRONIC AUTONOMOUS SOLUTIONS</h3>
            </div>
            <div className='footerLinks'>
              <div className='links'>
                <a
                  href='#'
                  className='link'
                >
                  {t("blocks.footer.privacyPolicy")}
                </a>
              </div>
              <div className='links'>
                <a
                  href='#'
                  className='link'
                >
                  {t("blocks.footer.licenseAgreement")}
                </a>
              </div>
              <div className='links'>
                <div
                  className='link'
                  onClick={showModal}
                >
                  {t("blocks.footer.frequentlyAskedQuestions")}
                </div>
                <Modal
                  title={t("blocks.modalWindow.title")}
                  open={open}
                  onOk={handleOk}
                  onCancel={() => setOpen(false)}
                  className='faqModal'
                >
                  <FAQ />
                </Modal>
              </div>
            </div>
          </div>
          <div className='footerItems'>
            <div className='footerNav'>
              <div className='links'>
                <Link
                  className='navLink'
                  to='/'
                >
                  {t("blocks.navigation.main")}
                </Link>
              </div>
              <div className='links'>
                <Link
                  className='navLink'
                  to='/about'
                >
                  {t("blocks.navigation.about")}
                </Link>
              </div>
              <div className='links'>
                <Link
                  className='navLink'
                  to='/products'
                >
                  {t("blocks.navigation.products")}
                </Link>
              </div>
              <div className='links'>
                <Link
                  className='navLink'
                  to='/news'
                >
                  {t("blocks.navigation.news")}
                </Link>
              </div>
              <div className='links'>
                <Link
                  className='navLink'
                  to='#contact'
                >
                  {t("blocks.navigation.contacts")}
                </Link>
              </div>
            </div>
          </div>
          <div className='footerItems'>
            <div className='footerLinksTitle'>
              <h5 className='title'> {t("blocks.footer.contactsUs")}</h5>
            </div>
            <div className='footerNav'>
              <div className='links'>
                <Link
                  className='navLink'
                  to='mailto:Info@eascompany.uz'
                >
                  Info@eascompany.uz
                </Link>
              </div>
              <div className='links'>
                <Link
                  className='navLink'
                  to='tel:+998773587971'
                >
                  +998773587971
                </Link>
              </div>
              <div className='links'>
                <Link
                  className='navLink'
                  to='tel:+998977974999'
                >
                  +998977974999
                </Link>
              </div>
              <div className='links'>
                <a
                  className='navLink'
                  href='https://yandex.ru/maps/-/CDh-RHPD'
                >
                  Ташкент, Яшнобадский рай-он, улица Марифат, дом 98
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
