import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import langRu from "../../assets/ru.svg";
import langUz from "../../assets/uzb.svg";
import langEn from "../../assets/en.svg";
import "./styles.sass";

const flagMap = {
  en: langEn,
  ru: langRu,
  uz: langUz,
};

function Languages() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className='language-switcher'>
      <div
        className={`selected-language ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={flagMap[i18n.language]}
          alt={i18n.language}
          className='flag'
        />
        <div className='dropdown-arrow'></div>
      </div>
      {isOpen && (
        <div className='dropdown-menu'>
          {Object.keys(flagMap).map((language) => (
            <div
              key={language}
              className='language-option'
              onClick={() => handleLanguageChange(language)}
            >
              <img
                src={flagMap[language]}
                alt={language}
                className='flag'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Languages;
