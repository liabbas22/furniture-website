import React from "react";
import "./style.css";
const Design = () => {
  return (
    <div className="design">
      <div className="contentwrapper">
        <div className="design_Container">
          <div className="image image1">
            <img src="./Assets/Desgin1.webp" alt="" />
            <div className="Image_text left1">
              <h4>Design idea</h4>
              <p>choice for you</p>
            </div>
          </div>
          <div className="image">
            <img src="./Assets/Desgin2.webp" alt="" />
            <div className="Image_text left">
              <h4>Furniture de Lus</h4>
              <p>Look at entire collection</p>
            </div>
          </div>
          <div className="image opacity">
            <img src="./Assets/Desgin3.webp" alt="" />
            <div className="lastIMage_Text">
              <span className="inter">intersting</span>
              <h3>SHOPPER GUIDE</h3>
              <span className="btn">Ream More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
