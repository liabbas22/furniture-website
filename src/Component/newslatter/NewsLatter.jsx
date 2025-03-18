import React from "react";
import "./style.css";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
const NewsLatter = () => {
  return (
    <div className="newslatter">
      <MdOutlineMailOutline className="email-icon" />
      <div className="content-wrapper">
        <div className="newslatter-container">
          <h1>Our Newsletter</h1>
          <p>
            It only takes a second to be the first to find out about our latest{" "}
            <br />
            news and promotionsa
          </p>
          <div className="email-container">
            <input type="email" placeholder="Your Email Address" />
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
