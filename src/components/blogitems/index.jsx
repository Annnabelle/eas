import React from "react";
import { FaRegUser } from "react-icons/fa6";

import blogImage from "../../assets/articleContentImage.png";

import "./styles.sass";
import { Link } from "react-router-dom";
import BlogFilter from "../blogFilter";
import Pagination from "../pagination";

const BlogItems = () => {
  const filterData = [
    { id: 1, filterText: "новости" },
    { id: 2, filterText: "тренды" },
    { id: 3, filterText: "решения" },
    { id: 4, filterText: "клиенты" },
  ];
  return (
    <div className='blogItems'>
      <div className='container'>
        <div className='blogItemsBody'>
          <div className='blogItemsContainer'>
            <div className='blogItem'>
              <div className='blogContent'>
                <div className='contentImage'>
                  <img
                    src={blogImage}
                    alt='blogImage'
                    className='img'
                  />
                </div>
                <div className='content'>
                  <div className='contentTitle'>
                    <h3 className='title'>‍Dedrone’s Network Delivers</h3>
                  </div>
                  <div className='contentText'>
                    <p className='text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className='contactTag'>
                    <p className='tag'>#тренды</p>
                  </div>
                </div>
              </div>
              <div className='blogInfo'>
                <div className='info'>
                  <div className='writer'>
                    <div className='writerAvatar'>
                      <FaRegUser />
                    </div>
                    <div className='writerName'>
                      <p className='name'>Anna K.</p>
                    </div>
                  </div>
                  <div className='infoDate'>
                    <p className='infoDateText'>Дата публикации:</p>
                    <p className='time'>01.01.2024</p>
                  </div>
                </div>
                <Link
                  className='link'
                  to='/'
                >
                  <p className='linkSeeMore'>Подробнее</p>
                </Link>
              </div>
            </div>
            <div className='blogItem'>
              <div className='blogContent'>
                <div className='contentImage'>
                  <img
                    src={blogImage}
                    alt='blogImage'
                    className='img'
                  />
                </div>
                <div className='content'>
                  <div className='contentTitle'>
                    <h3 className='title'>‍Dedrone’s Network Delivers</h3>
                  </div>
                  <div className='contentText'>
                    <p className='text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className='contactTag'>
                    <p className='tag'>#тренды</p>
                  </div>
                </div>
              </div>
              <div className='blogInfo'>
                <div className='info'>
                  <div className='writer'>
                    <div className='writerAvatar'>
                      <FaRegUser />
                    </div>
                    <div className='writerName'>
                      <p className='name'>Anna K.</p>
                    </div>
                  </div>
                  <div className='infoDate'>
                    <p className='infoDateText'>Дата публикации:</p>
                    <p className='time'>01.01.2024</p>
                  </div>
                </div>
                <Link
                  className='link'
                  to='/'
                >
                  <p className='linkSeeMore'>Подробнее</p>
                </Link>
              </div>
            </div>
          </div>
          <BlogFilter filterData={filterData} />
        </div>
        <Pagination
          totalPages={5}
          currentPage={5}
          onPageChange={5}
        />
      </div>
    </div>
  );
};

export default BlogItems;
