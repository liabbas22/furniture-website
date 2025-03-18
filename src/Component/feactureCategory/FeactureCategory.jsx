import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const FeactureCategory = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div className="feactureCategory">
      <div className="content-wrapper">
        <div className="top-content">
          <span>MADE THE HARD WAY</span>
          <h2>FEATURED CATEGORIES</h2>
        </div>
        <div className="feactureCategory-conainer">
          {category?.data?.map((data, index) => {
            return (
              <div className="image_box" key={index} onClick={()=>navigate(`/category/${data?.id}`)}>
                <img
                  src={"http://localhost:1337" + data?.img?.url}
                  alt={data.text}
                />
                <div className="text">
                  <span>{data?.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeactureCategory;
