import React, { useState } from "react";
import { newsData } from "../../data";
import NewsHero from "../../components/newsHero";
import NewsItem from "../../components/newsItem";
import Pagination from "../../components/pagination";
import "./styles.sass";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(newsData?.length / itemsPerPage);

  const currentNewsData = newsData?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='newsPage'>
      <NewsHero />
      <div className='newsItems'>
        <div className='container'>
          <div className='newsItemsContainer'>
            {currentNewsData?.length >= 0 &&
              currentNewsData?.map((item, index) => (
                <NewsItem
                  key={index}
                  newsData={item}
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
  );
};

export default NewsPage;
