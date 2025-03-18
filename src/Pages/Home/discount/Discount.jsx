import React from "react";
import "./style.css";
import { BiGift, BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Discount = () => {
  return (
    <div className="discount">
      <div className="content-wrapper">
        <div className="discount-container">
          <div className="Gift">
        <BiGift/>
          </div>
          <div className="text">
            Share This Page To Get 30% Discount New Collection
          </div>
          <div className="icons">
            <span>
              {" "}
              <BiLogoFacebook />
            </span>
            <span>
              {" "}
              <FaTwitter />
            </span>
            <span>
              {" "}
              <FiSend />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
