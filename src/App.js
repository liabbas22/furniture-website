import React, { useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Top from "./Component/top/Top";
import Shop from "./Pages/shop/Shop";
import Blog from "./Pages/blog/Blog";
import Page from "./Pages/page/Page";
import Feacture from "./Pages/feacture/Feacture";
import Footer from "./Component/Footer/Footer";
import Search from "./Component/search/Search";
import DetailsPage from "./Component/detailsPage/DetailsPage";
import Cart from "./Component/cart/Cart";
import Faqs from "./Pages/faqs/Faqs";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import AppContext from "./store/Context/Context";
import Category from "./Component/category/Category";
import SearchData from "./Component/searchData/SearchData";
import Comment from "./Component/comment/Comment";
import BlogDetails from "./Pages/blog/blogDetails/BlogDetails";
import BlogSearch from "./Pages/blog/blogDetails/blogSearch/BlogSearch";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContext>
          <Top />
          <Navbar />
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Feacture" element={<DetailsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/BlogSearch" element={<BlogSearch />} />
            <Route path="/page" element={<Faqs />} />
            <Route path="/product/:id" element={<DetailsPage />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchData />} />{" "}
            <Route path="/comment" element={<Comment />} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
