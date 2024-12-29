import React from "react";
import "./styles.sass";
import ResourcesHero from "../../components/resourcesHero";
import ResourcesCards from "../../components/resourcesCards";

const Resources = () => {
  return (
    <div className='resources'>
      <ResourcesHero />
      <ResourcesCards />
    </div>
  );
};

export default Resources;
