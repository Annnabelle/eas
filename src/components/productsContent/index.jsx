import React, { useState } from "react";
import Pagination from "../pagination";
import ProductItem from "./productitem";
import "./styles.sass";
import { productData } from "../../data";
import { useTranslation } from "react-i18next";

const ProductsContent = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(productData?.length / itemsPerPage);

  const currentNewsData = productData?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='productContent'>
      <div className='container'>
        <div className='productContentContainer'>
          <div className='productContentTitle'>
            <h4 className='title'>{t("blocks.product.contentTitle")}</h4>
          </div>
          <div className='productsItems'>
            <div className='productsItemsContainer'>
              {currentNewsData?.length >= 0 &&
                currentNewsData?.map((item, index) => (
                  <ProductItem
                    key={index}
                    productItem={item}
                  />
                ))}
            </div>
            {currentNewsData?.length >= 0 ? (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsContent;
