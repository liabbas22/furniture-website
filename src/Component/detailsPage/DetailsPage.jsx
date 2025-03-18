import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useLocation, useParams } from "react-router-dom";
import { MdEmail, MdHome } from "react-icons/md";
import Prograssbar from "../prograss/Prograssbar";
import StockTime from "./StockTime/StockTime";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/CounterSlice";
import { IoIosGitCompare } from "react-icons/io";
import Guranted1 from "../../Assets/garantiyImage.avif";
import { FaFacebookF, FaPinterest } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiLogoTumblr } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import SizeChart from "../sizeChart/SizeChart";
import ReleatedProduct_Component from "../releatedProduct_Component/ReleatedProduct_Component";
import {
  addtocart,
  decreaseQuantity,
  increaseQuantity,
} from "../../store/cartSlice";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";
import { Context } from "../../store/Context/Context";
const DetailsPage = () => {
  const { setCart } = useContext(Context);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const resentlyViewdData = useSelector((state) => state.recentlyViewed);

  const { id } = useParams();
  const { data } = UseFetchStrapiData(
    `/api/products?populate=*&[filters][id]=${id}`
  );

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("Description");
  const categories = ["Description", "Reviews", "Shipping & Delivery"];

  if (!data) {
    return (
      <h2 style={{ textAlign: "center", fontWeight: "500", color: "#444" }}>
        Please Wait!
      </h2>
    );
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    requestAnimationFrame(() => {
      setPosition({ x: `${x}%`, y: `${y}%` });
      setIsHovered(true);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const HandleAddToCart = (product) => {
    dispatch(addtocart(product));
    setCart(true);
  };
  return (
    <div className="details_Page">
      <div className="TopContainer">
        <div className="content-wrapper">
          <div className="icon_Text">
            <MdHome className="home_icon" />
            <p>Home</p>
            <div className="topContainer_text">
              <span className="salash">/</span>
              <p>furniture</p>
              <span className="salash">/</span>{" "}
              <p className="name">{data?.data?.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        {data?.data?.map((product) => (
          <div className="detailsPage-container">
            <div className="image-box">
              <img
                src={
                  selectedImage ||
                  "http://localhost:1337" + product?.img[0]?.url
                }
                alt={product?.img?.name}
                style={{
                  transformOrigin: `${position.x} ${position.y}`,
                  transform: isHovered ? "scale(1.5)" : "scale(1)",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
              {product?.img && (
                <div className="small-releatedProduct-container">
                  {[
                    "http://localhost:1337" + product?.img[0]?.url,
                    "http://localhost:1337" + product?.img[1]?.url,
                    "http://localhost:1337" + product?.img[2]?.url,
                    "http://localhost:1337" + product?.img[3]?.url,
                  ].map((image, index) => (
                    <div
                      key={index}
                      className="small-imageBox"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img src={image} alt="Related-chair" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-container">
              <h1>{product?.title}</h1>
              <h4>{`$: ${product.price}`}</h4>
              <p className="sold">17 sold in last 18 hours</p>
              <p className="des">{product?.des}</p>
              <div className="stock">
                <Prograssbar totalStock={99} />
                <div className="discountTime">
                  <StockTime />
                </div>
              </div>
              <div className="product-quantity">
                <button
                  className="descriment"
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  -
                </button>
                <span>{product?.quantity || 1}</span>
                <button
                  className="increment"
                  onClick={() => dispatch(increaseQuantity(product.id))}
                >
                  +
                </button>
              </div>
              <div className="buttons">
                <button
                  className="addToCart"
                  onClick={() => HandleAddToCart(product)}
                >
                  Add To Cart
                </button>
                <button className="Buyitnow">Buy it Now</button>
              </div>
              <div className="Icons">
                <p>
                  <span className="icon">
                    <FiHeart />
                  </span>
                  Login to Use Wishlist
                </p>
                <p>
                  <span className="icon">
                    <IoIosGitCompare />
                  </span>
                  Compare
                </p>
              </div>
              <p className="order-text">
                Order in the next <span>4 hours 53 minutes</span> to get it by
                Monday 02/24/2025
              </p>
              <div className="Shareimage-box">
                <img src={Guranted1} alt="" />
              </div>
              <div className="share">
                <span>Share:</span>
                <div className="share-icons">
                  <FaFacebookF className="icon" />
                  <BsTwitter className="icon" />
                  <MdEmail className="icon" />
                  <BiLogoTumblr className="icon" />
                  <FaPinterest className="icon" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="product-details-footer">
        <div className="chairCategory-header">
          {categories?.map((item, index) => (
            <span key={item}>
              <p
                className={`text ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
                {item}
              </p>
              {index < categories.length - 1 && <p className="salash">/</p>}
            </span>
          ))}
        </div>
        <div className="details-extra-info-container">
          <div className="content-wrapper">
            {category === "Description" && (
              <div className="descripition-container">
                <div className="descripition">
                  <div className="descripition-text">
                    <h3 className="title">TEMPUS CONSECTETUR</h3>
                    <p>
                      Ac dis vestibulum ut primis eleifend at neque at ornare
                      mus nostra non senectus magna natoque porta scelerisque
                      molestie taciti lobortis torquent ullamcorper a
                      ullamcorper. Hac suspendisse varius ut et consectetur eu
                      in nisi vestibulum consectetur ultricies in dictum
                      consectetur eu hendrerit ante tortor sagittis etiam porta
                      scelerisque molestie ostra non senectus magna natoque .
                    </p>
                    <p>
                      Vestibulum volutpat inceptos augue maecenas vehicula curae
                      fringilla ridiculus consectetur tincidunt sit suspendisse
                      rutrum facilisis nibh id ad scelerisque feugiat.
                      Suspendisse habitasse aenean a at enim quis in congue a
                      vestibulum lacinia tortor nam ridiculus. Dictum
                      consectetur eu hendrerit ante tortor sagittis etiam. Hac
                      suspendisse varius ut et consectetur eu porta scelerisque
                      molestie.
                    </p>
                  </div>
                  <div className="descripition-table">
                    <h3 className="title">FIND YOUR SIZE</h3>
                    <SizeChart />
                  </div>
                </div>
                <div className="descripition-bottom">
                  {/* {data?.data?.map((products) => (
                    <ReleatedProduct_Component
                      products={products?.product}
                      title={"Related product"}
                    />
                  ))} */}

                  <ReleatedProduct_Component
                    productsData={resentlyViewdData}
                    title={"Recently viewed products"}
                  />
                </div>
              </div>
            )}
            {category === "Reviews" && (
              <div className="reviews">
                {/* <ReleatedProduct_Component
                  products={products}
                  title={"Related product"}
                /> */}
                <ReleatedProduct_Component
                  productsData={resentlyViewdData}
                  title={"Recently viewed products"}
                />
              </div>
            )}
            {category === "Shipping & Delivery" && (
              <div className="shipping-container">
                <div className="shipping-info-container">
                  <div className="image-box">
                    <img src="/Assets/shippingMan.avif" alt="" />
                  </div>
                  <div className="text-container">
                    <p>
                      Vestibulum curae torquent diam diam commodo parturient
                      penatibus nunc dui adipiscing convallis bulum parturient
                      suspendisse parturient a.Parturient in parturient
                      scelerisque nibh lectus quam a natoque adipiscing a
                      vestibulum hendrerit et pharetra fames.Consequat net
                    </p>
                    <p>
                      Vestibulum parturient suspendisse parturient a.Parturient
                      in parturient scelerisque nibh lectus quam a natoque
                      adipiscing a vestibulum hendrerit et pharetra
                      fames.Consequat netus.
                    </p>
                    <p>
                      Scelerisque adipiscing bibendum sem vestibulum et in a a a
                      purus lectus faucibus lobortis tincidunt purus lectus nisl
                      class eros.Condimentum a et ullamcorper dictumst mus et
                      tristique elementum nam inceptos hac vestibulum amet elit
                    </p>
                  </div>
                </div>
                <div className="descripition-bottom">
                  {/* <ReleatedProduct_Component
                    products={products}
                    title={"Related product"}
                  /> */}
                  <ReleatedProduct_Component
                    productsData={resentlyViewdData}
                    title={"Recently viewed products"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
