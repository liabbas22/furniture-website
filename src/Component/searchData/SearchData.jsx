import React, { useState } from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addtocart } from "../../store/cartSlice";
import StarRating from "../../Component/rating/StarRating";

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, query } = location.state || [];

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="shop">
      <div className="content-wrapper">
        <div className="backPage">
          <Link to="/" className="Link" style={{ color: "black" }}>
            <span className="home">
              <IoHome />
              <p>Home</p>
            </span>
          </Link>
          <span className="separator">/</span>
          <span className="all">{"Search Products"}</span>
        </div>
      </div>
      <div className="productLength">
        {products?.data?.length > 0 ? (
          <span>{`${products?.data?.length} results for “${query}”`}</span>
        ) : (
          <span>Search our site</span>
        )}
      </div>
      <div className="content-wrapper">
        {products?.data?.length > 0 ? (
          <div className="shopCard-container">
            {products.data.map((product) => (
              <div
                key={product.id}
                className="product-box"
                onClick={() => handleProductClick(product)}
              >
                <img
                  src={`http://localhost:1337${product?.img?.[0]?.url}`}
                  alt={product?.title}
                  className="product-image"
                />
                <div className="product-text">
                  <span className="category">{product?.category}</span>
                  <h3>{product?.title}</h3>
                  <p className="des">{product?.des}</p>
                  <span className="rating">
                    <StarRating rating={product?.rating || 2} />
                  </span>
                  <p className="price-value">${product?.price}</p>
                </div>
                <div
                  className="Add-cart"
                  onClick={(e) => {
                    e.stopPropagation(); //we use it to add a product in cart without open product details
                    dispatch(addtocart(product));
                  }}
                >
                  <BiCart /> <span>Add To Cart</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="productnotfound">
            <p className="text">
              products No found. Try searching for something else!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
