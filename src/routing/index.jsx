import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";
import AboutPage from "../pages/about";
import NewsPage from "../pages/news";
import Article from "../pages/article";
import Projects from "../pages/projects";
import ProjectInner from "../pages/projectInner";
import ContactUs from "../components/contactUs";
import Blog from "../pages/blog";
import BlogInnerPage from "../pages/blogInner";
import Resources from "../pages/resources";

export const Routing = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
      <Route
        path='/about'
        element={<AboutPage />}
      />
      <Route
        path='/news'
        element={<NewsPage />}
      />
      <Route
        path='/news/:id'
        element={<Article />}
      />
      <Route
        path='/products'
        element={<Projects />}
      />
      <Route
        path='/project/:id'
        element={<ProjectInner />}
      />
      <Route
        path='#contact-us'
        element={<ContactUs />}
      />
      <Route
        path='/blog'
        element={<Blog />}
      />
      <Route
        path='/blog/1'
        element={<BlogInnerPage />}
      />
      <Route
        path='/resources'
        element={<Resources />}
      />
    </Routes>
  );
};
