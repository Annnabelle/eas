import React from "react";
import easBg from "../../assets/easBg.png";
import "./styles.sass";

const ProjectInnerHero = (props) => {
  return (
    <section className='projectInnerHero'>
      <div className='projectHeroImage'>
        <img
          src={props?.newProductData?.image}
          alt='easBg'
          className='img'
        />
      </div>
      <div className='backdropFilter'></div>
      <div className='projectHeroContent'>
        <div className='container'>
          <div className='projectHeroTitle'>
            <h3 className='title'>{props?.newProductData?.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInnerHero;
