import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCart, BiHeart } from "react-icons/bi";
const Releated_Product = ({ products }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const { data: AllMenProducts } = UseFetchStrapiData(
  //   `/api/men-products?populate=*`
  // );
  // console.log(AllMenProducts);
  // const Products = AllMenProducts?.data;
  return (
    <div className="related_products">
      <Slider {...settings}>
        {products?.map((product, index) => {
          return (
            <div
              className="releatedProduct-Card"
              key={index}
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <img
                src={
                  hoveredProductId === product.id
                    ? product.imageHover
                    : product.imgoriginal
                }
                alt={product.title}
              />
              <div className="releated_products_text">
                <h3>{product.title}</h3>
                <span className="basel">Basel</span>
                <div className="price-box">
                  {hoveredProductId === product.id ? (
                    <div className="cart">
                      <BiCart /> <span>Add To Cart</span>
                    </div>
                  ) : (
                    <p className="price-value">
                      {" "}
                      <span>{product.moneyFirst}</span>
                      <span>-</span>
                      <span>{product.moneyLast}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Releated_Product;
