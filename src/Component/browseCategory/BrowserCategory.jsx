import React from "react";
import "./style.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const BrowserCategory = () => {
  return (
    <div className="BrowserCategory">
      <div className="ContentWrapper">
        <ul>
          <li>
            Women's Clothing{" "}
            <span className="icon">
              <MdKeyboardArrowRight />
            </span>
          </li>
          <li>
            Man's Clothing{" "}
            <span className="icon">
              <MdKeyboardArrowRight />
            </span>
          </li>
          <li>Watches Man</li>
          <li>
            Bags & Shoes{" "}
            <span className="icon">
              <MdKeyboardArrowRight />
            </span>
          </li>
          <li>jewelry</li>
          <li>Accessories</li>
          <li>Bags</li>
          <li>TOys,Kids & Baby</li>
          <li>Sports & OutDoors</li>
          <li>Health & Beauty</li>
          <li>Furniture</li>
        </ul>
      </div>
    </div>
  );
};

export default BrowserCategory;
