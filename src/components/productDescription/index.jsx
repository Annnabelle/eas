import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import easImage from "../../assets/10.jpg";
import "./styles.sass";

const ProductInner = (props) => {
  return (
    <section className='productInner'>
      <div className='container'>
        <div className='productInnerContainer'>
          <Swiper
            spaceBetween={50}
            loop={true}
            autoplay={{ delay: 2000 }}
            freeMode={true}
            modules={[Autoplay]}
            speed={1200}
            className='productInnerSlider'
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
            {props?.newProductData?.images?.map((item) => (
              <SwiperSlide>
                <div className='productImage'>
                  <img
                    src={item}
                    alt='image'
                    className='img'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductInner;
