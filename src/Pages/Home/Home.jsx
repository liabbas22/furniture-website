import React, { useContext, useEffect } from "react";
import "./style.css";
import Search from "../../Component/search/Search";
import BrowserCategory from "../../Component/browseCategory/BrowserCategory";
import HeroBanner from "../../Component/HomeBanner/HomeBanner";
import Footer from "../../Component/Footer/Footer";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";
import Design from "./dedign/Design";
import FeactureProducts from "../../Component/FeactureProducts/FeactureProducts";
import Discount from "./discount/Discount";
import ChairCategory from "./chairCategory/ChairCategory";
import FeactureCategory from "../../Component/feactureCategory/FeactureCategory";
import BlogSlider from "./blogSlider/BlogSlider";
import NewsLatter from "../../Component/newslatter/NewsLatter";
import { fetchDataFromApi } from "../../store/ApiUtility/api";
import { Context } from "../../store/Context/Context";
import {
  clearChat,
  decreaseQuantity,
  increaseQuantity,
  removefromcart,
} from "../../store/cartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const { category, setCategory, products, setProducts } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getCategory();
    getProducts();
  }, []);
  const getCategory = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log("category Data", res);
      setCategory(res);
    });
  };
  const getProducts = () => {
    fetchDataFromApi(`/api/products?populate=*&pagination[limit]=8`).then(
      (res) => {
        setProducts(res);
      }
    );
  };
  return (
    <div>
      <HomeBanner />
      <Design />
      <FeactureProducts products={products} title={"FEATURED PRODUCTS"} />
      {/* <BrowserCategory /> */}
      <Discount />
      <ChairCategory />
      <FeactureCategory category={category} />
      <BlogSlider title="USEFUL ARTICLES" Heading={"FROM OUR BLOG"} />
      <NewsLatter />
      {/* <button onClick={() => dispatch(clearChat())}>clearbutton</button> */}
    </div>
  );
};

export default Home;
