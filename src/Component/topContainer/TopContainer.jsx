import React from "react";
import "./style.css";
import { MdHome } from "react-icons/md";
const TopContainer = ({title,text}) => {
  return (
    <div className="Blog_Top-Container">
      <div className="text_container">
        <h1>{title}</h1>
        <div className="blog_icons">
          <p>
            <MdHome className="home_icon" /> <span>Home</span>{" "}
          </p>{" "}
          <p>/</p>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
