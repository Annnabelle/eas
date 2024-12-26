import React from "react";
import ProjectInnerHero from "../../components/projectInnerHero";
import ProjectContent from "../../components/projectContent";
import { useParams } from "react-router-dom";
import { productData } from "../../data";
import ProductInner from "../../components/productDescription";

const ProjectInner = () => {
  const { id } = useParams();
  const productDataInner = productData;
  const newProductData = productDataInner?.find((product) => product?.id === Number(id));
  return (
    <div className='projectInner'>
      <ProjectInnerHero newProductData={newProductData} />
      <ProjectContent newProductData={newProductData} />
      <ProductInner newProductData={newProductData} />
    </div>
  );
};

export default ProjectInner;
