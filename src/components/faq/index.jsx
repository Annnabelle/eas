import React, { useState } from "react";
import { Collapse } from "antd";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const FAQ = () => {
  const [activeKey, setActiveKey] = useState([]);
  const text = `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  const handleChange = (key) => {
    setActiveKey(key);
  };

  const faqContent = [
    {
      id: 1,
      heading: {
        ru: "Мы производим или проводим только сборку?",
        en: "Do we manufacture or do we only assemble?",
        uz: "Biz ishlab chiqaramizmi yoki faqat yig'amizmi?",
      },
      text: {
        ru: "Мы полностью сами занимаемся производством и качеством наших продуктов",
        en: "We are completely responsible for the production and quality of our products.",
        uz: "Mahsulotlarimiz ishlab chiqarish va sifati uchun biz to'liq javobgarmiz.",
      },
    },
    {
      id: 2,
      heading: {
        ru: "Имеютсали у нас сертификаты или лицензий для производства ?",
        en: "Do we have certificates or licenses for production?",
        uz: "Bizda ishlab chiqarish uchun sertifikatlar yoki litsenziyalar bormi?",
      },
      text: {
        ru: "Да, у нас есть сертификаты  и лицензии, которые находятся в открытом доступе на нашем сайте.",
        en: "Yes, we have certificates and licenses that are publicly available on our website.",
        uz: "Ha, bizning veb-saytimizda hamma uchun ochiq bo'lgan sertifikatlar va litsenziyalar mavjud.",
      },
    },
    {
      id: 3,
      heading: {
        ru: "Производит ли кто-то еще анти дроны в Узбекистане? ",
        en: "Is anyone else producing anti-drones in Uzbekistan?",
        uz: "O'zbekistonda yana kimdir anti dron ishlab chiqaradi?",
      },
      text: {
        ru: "Мы являемся единственными производителями в Узбекистане.",
        en: "We are the only manufacturers in Uzbekistan.",
        uz: "Biz O‘zbekistonda yagona ishlab chiqaruvchilarmiz.",
      },
    },
    {
      id: 4,
      heading: {
        ru: "Имеется ли у нас пост продажный сервис ?",
        en: "Do we have after sales service?",
        uz: "Bizda post savdo xizmati bormi?",
      },
      text: {
        ru: "Да, конечно.",
        en: "Yes, sure.",
        uz: "Ha, albatta.",
      },
    },
    {
      id: 5,
      heading: {
        ru: "Имеются ли обучающие программы по управлению анти радаром ?",
        en: "Are there any training programs on how to operate an anti-radar?",
        uz: "Radarga qarshi ishlash bo'yicha o'quv dasturlari bormi?",
      },
      text: {
        ru: " После покупки наших устройств, мы проводим обучающий курс, для ваших сотрудников. И так же вручим сертификаты об успешно проведенной программы обучения.",
        en: "After purchasing our devices, we conduct a training course for your employees. And we will also award certificates for a successfully completed training program.",
        uz: "Qurilmalarimizni sotib olganimizdan so'ng, biz sizning xodimlaringiz uchun o'quv kursini o'tkazamiz. Shuningdek, biz muvaffaqiyatli yakunlangan o'quv dasturlari to'g'risidagi sertifikatlarni taqdim etamiz.",
      },
    },
  ];

  return (
    <Collapse
      activeKey={activeKey}
      onChange={handleChange}
      accordion
      className='faqSection'
    >
      {faqContent?.map((item) => (
        <Panel
          header={item?.heading?.[lang]}
          key='1'
          className='heading'
        >
          <p className='faqtext'>{item?.text?.[lang]}</p>
        </Panel>
      ))}
    </Collapse>
  );
};

export default FAQ;
