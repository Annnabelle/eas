import React from "react";
import BlogHero from "../../components/blogIHero";
import BlogItems from "../../components/blogitems";
import './styles.sass'

const Blog = () => {
  return (
    <div className="blog">
      <BlogHero />
      <div className='blogBody'>
        <BlogItems />
      </div>
    </div>
  );
};

export default Blog;
