import React from "react";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const Rights = () => {
  const { t } = useTranslation();
  return (
    <div className='right'>
      <div className='container'>
        <div className='rightText'>
          <p className='text'>EAS - {t("blocks.footer.rights")} @2024 </p>
        </div>
      </div>
    </div>
  );
};

export default Rights;
