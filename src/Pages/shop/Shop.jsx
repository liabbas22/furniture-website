import React, { useContext, useState } from "react";
import "./style.css";
import { IoHome } from "react-icons/io5";
import useFetch from "../../store/ApiUtility/fetch/UseFetch";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import { BiCart, BiHeart } from "react-icons/bi";
import { DiGitCompare } from "react-icons/di";
import { MdZoomIn } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addtocart } from "../../store/cartSlice";
import { FaStar } from "react-icons/fa";
import hoverImage from "../../Assets/Chair2.jpg";
import StarRating from "../../Component/rating/StarRating";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";
import { Context } from "../../store/Context/Context";
const Shop = () => {
  const { setCart } = useContext(Context);
  const { loading, products, error } = useFetch();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const { data } = UseFetchStrapiData(`/api/products?populate=*`);

  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate(`/product/${product.id}`);
  };
  const dispatch = useDispatch();

  return (
    <div className="shop">
      <div className="content-wrapper">
        <div className="backPage">
          <Link to={"/"} className="Link" style={{ color: "black" }}>
            <span className="home">
              <IoHome />
              <p>Home</p>
            </span>
          </Link>
          <span className="salah">/</span>
          <span className="all">All</span>
        </div>
        <div className="shopCard-container">
          {data?.data?.map((product, index) => (
            <div
              key={product.id}
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
                alt={product?.title}
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
                <span className="category">{product?.category}</span>
                <h3>{product?.title}</h3>
                <p className="des">{product?.des}</p>
                <span className="rating">
                   <StarRating rating={Math.round(product?.rating)} />
                </span>
                <p className="price-value">{`$${product?.price}`}</p>
              </div>
              <div
                className="Add-cart"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addtocart(product));
                  setCart(true);
                }}
              >
                <BiCart /> <span>Add To Cart</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
