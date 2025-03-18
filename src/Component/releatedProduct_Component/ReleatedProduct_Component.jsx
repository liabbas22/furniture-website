import React, { useState } from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiCart, BiHeart } from "react-icons/bi";
import { IconButton, Tooltip } from "@mui/material";
import { DiGitCompare } from "react-icons/di";
import { MdZoomIn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../store/cartSlice";
import { clearRecentlyViewed } from "../../store/resentlyViewd/ResentlyViewed";
import StarRating from "../rating/StarRating";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";

import { addRecentlyViewedProduct } from "../../store/resentlyViewd/ResentlyViewed";
const Releated_Product = ({ productsData, title }) => {
  const dispatch = useDispatch();

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
    dispatch(addRecentlyViewedProduct(product));
  };
  const PrevArrow = ({ onClick }) => (
    <FaArrowLeft className="prev-arrow" onClick={onClick} />
  );
  const NextArrow = ({ onClick }) => (
    <FaArrowRight className="next-arrow" onClick={onClick} />
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="releatedProduct-container">
      <h3 className="heading">{title}</h3>
      <button
        className="clrViewCart"
        onClick={() => dispatch(clearRecentlyViewed())}
      >
        Clear View Cart
      </button>
      {productsData.length > 1 && (
        <Slider {...settings}>
          {productsData?.map((product, index) => (
            <div
              key={index}
              className="product-box"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
              onClick={() => handleClick(product)}
            >
              <img
                src={
                  hoveredProductId === product.id
                    ? "http://localhost:1337" + product?.img[0]?.url
                    : "http://localhost:1337" + product?.img[1]?.url
                }
                alt={product?.name}
                className="product-image"
              />
              <div className="ToolTipIcons_Box">
                <Tooltip
                  title="Add to Wishlist"
                  className="Tooltip-icon"
                  placement="left"
                >
                  <IconButton>
                    <BiHeart />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Compare" className="icon" placement="left">
                  <IconButton>
                    <DiGitCompare />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Quick view" className="icon" placement="left">
                  <IconButton>
                    <MdZoomIn />
                  </IconButton>
                </Tooltip>
              </div>
              <div className="product-text">
                <h3>{product?.title}</h3>
                <p className="des">{product?.des}</p>
                <span className="rating">
                <StarRating rating={Math.round(product?.rating)} />
                </span>
                <div className="price-box">
                  {hoveredProductId === product.id ? (
                    <div
                      className="cart"
                      onClick={() => dispatch(addtocart(product))}
                    >
                      <BiCart /> <span>Add To Cart</span>
                    </div>
                  ) : (
                    <p className="price-value">{`$: ${product.price}`}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Releated_Product;
