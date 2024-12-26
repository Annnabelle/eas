import React from "react";
import ArticleHero from "../../components/articleHero";
import ArticleContent from "../../components/articleContent";
import { useParams } from "react-router-dom";
import { newsData } from "../../data";

const Article = () => {
  const { id } = useParams();
  const articleData = newsData;
  const newArticleData = articleData?.find((article) => article.id === Number(id));
  return (
    <div className='article'>
      <ArticleHero newArticleData={newArticleData} />
      <ArticleContent newArticleData={newArticleData} />
    </div>
  );
};

export default Article;
