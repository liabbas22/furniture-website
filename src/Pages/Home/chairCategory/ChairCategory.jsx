import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const ChairCategory = () => {
  const [woodChair, setWoodChair] = useState(true);
  const [plasticChair, setPlasticChair] = useState(false);
  const [sofa, setSofa] = useState(false);
  const woodClick = () => {
    setWoodChair(true);
    setPlasticChair(false);
    setSofa(false);
  };
  const plasticChairClick = () => {
    setWoodChair(false);
    setPlasticChair(true);
    setSofa(false);
  };
  const sofaClick = () => {
    setWoodChair(false);
    setPlasticChair(false);
    setSofa(true);
  };
  return (
    <div className="chair-category">
      <div className="content-wrapper">
        <div className="chairCategory-header">
          <span>
            <p
              className={`text ${woodChair ? "active" : ""}`}
              onClick={woodClick}
            >
              {" "}
              Wood Chair
            </p>{" "}
            <p className="salash">/</p>
          </span>
          <span>
            <p
              className={`text ${plasticChair ? "active" : ""}`}
              onClick={plasticChairClick}
            >
              {" "}
              plastic Chair
            </p>{" "}
            <p className="salash">/</p>
          </span>
          <span>
            <p className={`text ${sofa ? "active" : ""}`} onClick={sofaClick}>
              Sofa
            </p>
          </span>
        </div>
        <div className="chairCategory-content">
          {woodChair && (
            <>
              <div className="text-container">
                <span>Designers: Valentino Rachelli</span>
                <h2 className="title">Eames Sofa Compact</h2>
                <h4 className="price">$800</h4>
                <p className="desc">
                  Vel himenaeos quam fringilla a interdum blandit adipiscing
                  ullamcorper per consequat in ut a enim suspendisse luctus
                  commodo varius dictumst egestas at curae ultricies nam.
                </p>
                <Link className="Link" to={"/shop"}>
                  {" "}
                  <button className="btn">Read More</button>
                </Link>
              </div>
              <div className="Image1">
                <img src="./Assets/woodChair.webp" alt="" />
              </div>
              <div className="image2">
                <img src="./Assets/woodchair2.webp" alt="" />
              </div>
            </>
          )}
          {plasticChair && (
            <>
              <div className="image1">
                <img src="./Assets/WhiteChair2.webp" alt="" />
              </div>
              <div className="text-container" style={{ textAlign: "center" }}>
                <span>Designers: Valentino Rachelli</span>
                <h2 className="title">Eames Sofa Compact</h2>
                <h4 className="price">$800</h4>
                <p className="desc">
                  Vel himenaeos quam fringilla a interdum blandit adipiscing
                  ullamcorper per consequat in ut a enim suspendisse luctus
                  commodo varius dictumst egestas at curae ultricies nam.
                </p>
                <Link className="Link" to={"/shop"}>
                  {" "}
                  <button className="btn">Read More</button>
                </Link>
              </div>
              <div className="image2">
                <img src="./Assets/WhiteChair3.webp" alt="" />
              </div>
            </>
          )}
          {sofa && (
            <>
              <div className="image1">
                <img src="./Assets/sofa1.webp" alt="" />
              </div>
              <div className="image2">
                <img src="./Assets/sofachair2.webp" alt="" />
              </div>
              <div className="text-container" style={{ textAlign: "left" }}>
                <span>Designers: Charles and Ray Eames</span>
                <h2 className="title">Eames Sofa Compact</h2>
                <h4 className="price">$900</h4>
                <p className="desc">
                  Vel himenaeos quam fringilla a interdum blandit adipiscing
                  ullamcorper per consequat in ut a enim suspendisse luctus
                  commodo varius dictumst egestas at curae ultricies nam.
                </p>
                <Link className="Link" to={"/shop"}>
                  {" "}
                  <button className="btn">Read More</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChairCategory;
