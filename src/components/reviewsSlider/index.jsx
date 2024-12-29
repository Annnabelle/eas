import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import "./styles.sass";

const ReviewsSlider = () => {
  const sliderContent = [
    {
      id: 1,
      reviewText:
        "Очень простой в использовании, после просмотра видео все стало более понятнее. Очень рад и доволен, что смог приобрести",
      reviewAuthor: "Anna K.",
      reviewDate: "01.01.2024",
    },
    {
      id: 2,
      reviewText:
        "Очень простой в использовании, после просмотра видео все стало более понятнее. Очень рад и доволен, что смог приобрести",
      reviewAuthor: "Anna K.",
      reviewDate: "01.01.2024",
    },
    {
      id: 3,
      reviewText:
        "Очень простой в использовании, после просмотра видео все стало более понятнее. Очень рад и доволен, что смог приобрести",
      reviewAuthor: "Anna K.",
      reviewDate: "01.01.2024",
    },
    {
      id: 4,
      reviewText:
        "Очень простой в использовании, после просмотра видео все стало более понятнее. Очень рад и доволен, что смог приобрести",
      reviewAuthor: "Anna K.",
      reviewDate: "01.01.2024",
    },
  ];
  return (
    <div className='reviews'>
      <div className='reviewsContainer'>
        <div className='reviewsTitle'>
          <h4 className='title'>Отзывы</h4>
        </div>
        <div className='reviewsSlider'>
          <Swiper
            spaceBetween={50}
            loop={true}
            autoplay={{ delay: 2000 }}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            freeMode={true}
            modules={[Autoplay, Navigation, Pagination]}
            speed={1200}
            className='reviewsSliderSwiper'
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
            {sliderContent?.length > 0 &&
              sliderContent.map((item, index) => (
                <SwiperSlide key={item?.id}>
                  <div className='reviewCard'>
                    <div className='cardContainer'>
                      <div className='cardText'>
                        <p className='text'>{item?.reviewText}</p>
                      </div>
                      <div className='cardBottomContent'>
                        <div className='user'>
                          <div className='userIcon'>
                            <FaRegUser />
                          </div>
                          <div className='userName'>
                            <p className='name'>Anna K.</p>
                          </div>
                        </div>
                        <div className='publishDate'>
                          <p className='date'>01.01.2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSlider;
