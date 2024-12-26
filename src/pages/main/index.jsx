import React from "react";
import MainHero from "../../components/mainHero";
import AboutSection from "../../components/aboutSection";
import Advantages from "../../components/advantages";
import NewsSection from "../../components/newsSection";
import ContactUs from "../../components/contactUs";
import { newsData } from "../../data";

const MainPage = () => {
  const newsSection = newsData;

  function getFirstSixElements(newsSection) {
    return newsSection?.slice(0, 6);
  }
  const firstSix = getFirstSixElements(newsSection);
  return (
    <div>
      <MainHero />
      <AboutSection />
      <Advantages />
      <NewsSection firstSix={firstSix} />
      <ContactUs />
    </div>
  );
};

export default MainPage;
