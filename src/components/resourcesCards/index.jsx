import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../../assets/articleContentImage.png";
import "./styles.sass";
import Pagination from "../pagination";

const ResourcesCards = () => {
  return (
    <div className='resourcesCards'>
      <div className='container'>
        <div className='resourcesCardsContainer'>
          <div className='card'>
            <Link
              className='cardLink'
              to='/'
            >
              <div className='cardContainer'>
                <div className='cardImage'>
                  <img
                    className='img'
                    src={cardImage}
                    alt='cardImage'
                  />
                </div>
                <div className='cardContent'>
                  <div className='contentTitle'>
                    <h5 className='title'>Применение EAS-1 "FOWLER" в деле </h5>
                  </div>
                  <div className='contentText'>
                    <p className='text'>
                      Посмотрите видео, которое поможет вам обучиться пользованию EAS-1 "FOWLER". И даст точное
                      понимание о продукте который мы...
                    </p>
                  </div>
                  <div className='contentLinkMore'>
                    <Link
                      className='link'
                      to='/'
                    >
                      Смотреть подробнее...
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='card'>
            <Link
              className='cardLink'
              to='/'
            >
              <div className='cardContainer'>
                <div className='cardImage'>
                  <img
                    className='img'
                    src={cardImage}
                    alt='cardImage'
                  />
                </div>
                <div className='cardContent'>
                  <div className='contentTitle'>
                    <h5 className='title'>Применение EAS-1 "FOWLER" в деле </h5>
                  </div>
                  <div className='contentText'>
                    <p className='text'>
                      Посмотрите видео, которое поможет вам обучиться пользованию EAS-1 "FOWLER". И даст точное
                      понимание о продукте который мы...
                    </p>
                  </div>
                  <div className='contentLinkMore'>
                    <Link
                      className='link'
                      to='/'
                    >
                      Смотреть подробнее...
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='card'>
            <Link
              className='cardLink'
              to='/'
            >
              <div className='cardContainer'>
                <div className='cardImage'>
                  <img
                    className='img'
                    src={cardImage}
                    alt='cardImage'
                  />
                </div>
                <div className='cardContent'>
                  <div className='contentTitle'>
                    <h5 className='title'>Применение EAS-1 "FOWLER" в деле </h5>
                  </div>
                  <div className='contentText'>
                    <p className='text'>
                      Посмотрите видео, которое поможет вам обучиться пользованию EAS-1 "FOWLER". И даст точное
                      понимание о продукте который мы...
                    </p>
                  </div>
                  <div className='contentLinkMore'>
                    <Link
                      className='link'
                      to='/'
                    >
                      Смотреть подробнее...
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className='card'>
            <Link
              className='cardLink'
              to='/'
            >
              <div className='cardContainer'>
                <div className='cardImage'>
                  <img
                    className='img'
                    src={cardImage}
                    alt='cardImage'
                  />
                </div>
                <div className='cardContent'>
                  <div className='contentTitle'>
                    <h5 className='title'>Применение EAS-1 "FOWLER" в деле </h5>
                  </div>
                  <div className='contentText'>
                    <p className='text'>
                      Посмотрите видео, которое поможет вам обучиться пользованию EAS-1 "FOWLER". И даст точное
                      понимание о продукте который мы...
                    </p>
                  </div>
                  <div className='contentLinkMore'>
                    <Link
                      className='link'
                      to='/'
                    >
                      Смотреть подробнее...
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
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

export default ResourcesCards;
