import React from "react";
import ResourcesInnerHero from "../../components/resourcesInnerHero";
import ReviewsSlider from "../../components/reviewsSlider";
import ReviewForm from "../../components/reviewForm";
import "./styles.sass";

const ResourcesInner = () => {
  return (
    <div className='resourcesInner'>
      <ResourcesInnerHero />
      <div className='container'>
        <div className='resourcesInnerContainer'>
          <div className='resourcesInnerVideo'>
            <video
              controls
              className='video'
            >
              <source
                src='video.mp4'
                type='video/mp4'
              />
              Ваш браузер не поддерживает видео-тег.
            </video>
          </div>
          <div className='resourcesInnerContent'>
            <div className='contentTitle'>
              <h4 className='title'>EAS-1 "FOWLER"</h4>
            </div>
            <div className='contentText'>
              <p className='text'>
                Получение лицензии от Агенства оборонной промышленности при Министерстве обороны Республики Узбекистан
                на разработку и реализации портативных и стационарных систем противодействий малоразмерным БПЛА. Научное
                исследование и разработка портативных и стационарных систем противодействия малоразмерным БПЛА.
                Проведение практического испытания портативных и стационарных систем противодействия малоразмерным БПЛА
                для министерства обороны МВД. Государственной службы безопасности Президента Респулики Узбекистан ,
                Пограничных воиск СГБ, Национальной гвардии и других заинтересованных организаций. Получение
                международного сертификата ISO 9001:2015 (система менеджмента качества) в области: производство
                комплектов по борьбе с дронами "EAS" (антидрон). Проведение встреч с зарубежными компаниями о
                сотрудничестве и совместной деятельности (с компанией "Gurbuz Trade" (Турция) подписание документа
                "Соглашение о сотрудничестве и совместной деятельности " с АО "Западно-Казахстанский машиностроительный
                завод" . Республика Казахстан заключен двухсторонний меморандум о "Сотрудничестве и совместной
                деятельности")
              </p>
            </div>
          </div>
          <ReviewsSlider />
        </div>
      </div>
      <ReviewForm />
    </div>
  );
};

export default ResourcesInner;
