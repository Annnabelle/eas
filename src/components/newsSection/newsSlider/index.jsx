import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import "swiper/css";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const NewsSlider = (props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage;
  return (
    <div className='newsSliderContainer'>
      <Swiper
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        freeMode={true}
        modules={[Autoplay, Navigation, Pagination]}
        speed={1200}
        className='newsSlider'
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <div className='sliderHeader'>
          <div className='headerMore'>
            <a
              className='link'
              href='/news'
            >
              {t("blocks.buttons.anotherNews")}
            </a>
          </div>
          <div className='btnsGroup'>
            <div className='swiper-button-prev'>
              <IoIosArrowUp />
            </div>
            <div className='swiper-pagination'></div>
            <div className='swiper-button-next'>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {props?.firstSix?.length > 0 &&
          props?.firstSix?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='newsCard'>
                <div className='cardContainer'>
                  <div className='cardImage'>
                    <img
                      src={item?.image}
                      alt='image'
                      className='img'
                    />
                  </div>
                  <div className='cardContent'>
                    <div className='contentTitle'>
                      <h4 className='title'>{item?.title?.[lang]}</h4>
                    </div>
                    <div className='contentText'>
                      <p className='text'>{item?.text?.[lang]}</p>
                    </div>
                  </div>
                  <div className='contentSeeMore'>
                    <Link
                      to={`/news/${item?.id}`}
                      className='link'
                    >
                      {t("blocks.news.seeMore")}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
