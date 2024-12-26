import React from "react";
import ProjectsHero from "../../components/projectsHero";
import ProductsContent from "../../components/productsContent";
import ContactUs from "../../components/contactUs";

const Projects = () => {
  return (
    <div className='projects'>
      <ProjectsHero />
      <ProductsContent />
      <ContactUs />
    </div>
  );
};

export default Projects;
