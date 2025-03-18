import React, { useEffect, useState } from "react";
import { BiCart, BiHeart, BiWallet } from "react-icons/bi";
import "./style.css";
import { IconButton, Tooltip } from "@mui/material";
import { DiGitCompare } from "react-icons/di";
import { MdZoomIn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
// import { products } from "../../data/Data";
import { useDispatch } from "react-redux";
import { addtocart } from "../../store/cartSlice";
import { addRecentlyViewedProduct } from "../../store/resentlyViewd/ResentlyViewed";
import StarRating from "../rating/StarRating";
const FeactureProducts = ({ products, title }) => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/product/${product.id}`);
    dispatch(addRecentlyViewedProduct(product));
  };
  const dispatch = useDispatch();
  const productList = products?.data || [];

  return (
    <div className="feature">
      <div className="content-wrapper">
        <div className="feature-container">
          <span className="top-text">MADE THE HARD WAY</span>
          <h3 className="heading">{title}</h3>
          <div className="products-container">
            {productList?.map((product, index) => (
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
                      ? "http://localhost:1337" + product?.img[1]?.url
                      : "http://localhost:1337" + product?.img[0]?.url
                  }
                  alt={product?.img?.name}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(addtocart(product));
                        }}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeactureProducts;
