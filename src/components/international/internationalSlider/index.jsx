import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import newsImage from "../../../assets/newsImage.png";
import "swiper/css";
import "./styles.sass";
import { useTranslation } from "react-i18next";

const InternationalSlider = () => {
  const { t } = useTranslation();
  const internationalContent = [
    {
      id: 1,
      firstSide: {
        title: t("blocks.pageAbout.international.one.first.title"),
        subtitle: t("blocks.pageAbout.international.one.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.one.second.subtitle"),
    },
    {
      id: 2,
      firstSide: {
        title: t("blocks.pageAbout.international.two.first.title"),
        subtitle: t("blocks.pageAbout.international.two.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.two.second.subtitle"),
    },
    {
      id: 3,
      firstSide: {
        title: t("blocks.pageAbout.international.three.first.title"),
        subtitle: t("blocks.pageAbout.international.three.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.three.second.subtitle"),
    },
    {
      id: 4,
      firstSide: {
        title: t("blocks.pageAbout.international.four.first.title"),
        subtitle: t("blocks.pageAbout.international.four.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.four.second.subtitle"),
    },
    {
      id: 5,
      firstSide: {
        title: t("blocks.pageAbout.international.five.first.title"),
        subtitle: t("blocks.pageAbout.international.five.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.five.second.subtitle"),
    },
    {
      id: 6,
      firstSide: {
        title: t("blocks.pageAbout.international.six.first.title"),
        subtitle: t("blocks.pageAbout.international.six.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.six.second.subtitle"),
    },
    {
      id: 7,
      firstSide: {
        title: t("blocks.pageAbout.international.seven.first.title"),
        subtitle: t("blocks.pageAbout.international.seven.first.subtitle"),
      },
      secondSide: t("blocks.pageAbout.international.seven.second.subtitle"),
    },
  ];

  return (
    <div className='newsSliderContainer'>
      <Swiper
        spaceBetween={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        freeMode={true}
        modules={[Autoplay, Navigation, Pagination]}
        speed={1200}
        className='internationalSwiperSlider'
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1250: {
            slidesPerView: 4,
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
        {internationalContent?.length > 0 &&
          internationalContent?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='internationalCard'>
                <div className='benefitsCard'>
                  <div className='benefitsCardInner'>
                    <div className='flipCardFront'>
                      <div className='cardTitle'>
                        <h4 className='title'>{item?.firstSide?.title}</h4>
                      </div>
                      <div className='cardText'>
                        <p className='text'>{item?.firstSide?.subtitle}</p>
                      </div>
                    </div>
                    <div className='flipCardBack'>
                      <div className='cardText'>
                        <p className='text'>{item?.firstSide?.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default InternationalSlider;
