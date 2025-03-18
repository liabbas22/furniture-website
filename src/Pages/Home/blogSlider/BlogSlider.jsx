import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Blog from "../../blog/Blog";
import { useNavigate } from "react-router-dom";
import UseFetchStrapiData from "../../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";

const BlogSlider = ({ title, Heading }) => {
  const PrevArrow = ({ onClick }) => (
    <FaArrowLeft className="prev-arrow" onClick={onClick} />
  );
  const NextArrow = ({ onClick }) => (
    <FaArrowRight className="next-arrow" onClick={onClick} />
  );
  const { data } = UseFetchStrapiData(`/api/blogs?populate=*`);

  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blogSlider">
      <div className="content-wrapper">
        <div className="feature-container">
          <span className="top-text">{title}</span>
          <h3 className="heading">{Heading}</h3>
          <div className="blogSlider_container">
            <Slider {...settings}>
              {data?.data?.map((data) => {
                return (
                  <div className="blog_card" key={data.id}>
                    <img
                      src={"http://localhost:1337" + data?.img?.url}
                      alt="Slider Image"
                      onClick={() => navigate(`/blog/${data.id}`,{state:data})}
                    />

                    <div className="date">
                      <span>{data.date}</span>
                      <p>{data?.Month}</p>
                    </div>
                    <div className="blogtext-container">
                      <button>life style</button>
                      <h2 className="titles">{data?.title}</h2>
                      <span className="com">Leave a Comment</span>
                      <p>{data?.des}</p>
                      <span className="btn">Read More</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;