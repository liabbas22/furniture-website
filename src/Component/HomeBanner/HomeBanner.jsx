import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import BrowserCategory from "../browseCategory/BrowserCategory";
import "./style.css";
import { sliderData } from "../../data/Data";
const HomeBanner = () => {
  return (
    <div className="HomeBanner">
     
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
               <div className="contentWrapper">
              <div className="HeroBannerSlider_Container">
                <div className="TextContainer">
                  <h4>{item.description}</h4>
                  <h2 className="title">{item.title}</h2>
                  <h1 className="Price">{item.price}</h1>
                  <Link to={""} className="link">
                    <button className="btn">Shop Now</button>
                  </Link>
                </div>
                <div className="ImageContainer">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  );
};

export default HomeBanner;
