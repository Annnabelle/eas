import React from "react";
import AboutHero from "../../components/aboutHero";
import AboutSecondBlock from "../../components/aboutSecondBlock";
import Development from "../../components/development";
import Certificates from "../../components/certificates";
import ContactUs from "../../components/contactUs";
import International from "../../components/international";

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <AboutHero />
      <AboutSecondBlock />
      <Development />
      <Certificates />
      <ContactUs />
      <International />
    </div>
  );
};

export default AboutPage;
