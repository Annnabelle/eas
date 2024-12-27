import React from "react";
import { FaRegUser } from "react-icons/fa6";
import "./styles.sass";

const UserArticleCard = () => {
  return (
    <div className='userArticleCard'>
      <div className='userArticleCardContainer'>
        <div className='articleInfo'>
          <div className='user'>
            <div className='userIcon'>
              <FaRegUser />
            </div>
            <div className='userName'>
              <p className='name'>Anna K.</p>
            </div>
          </div>
          <div className='articlePublishDate'>
            <p className='text'>Дата публикации: </p>
            <p className='date'>01.01.2024</p>
          </div>
        </div>
        <div className='articleInfo'>
          <p className='infoText'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserArticleCard;
