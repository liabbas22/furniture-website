import React from "react";
import "./style.css";
import { FaPhone } from "react-icons/fa6";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Top = () => {
  return (
    <div className="top-container">
      <div className="content-wrapper">
        <div className="Main-Container">
          <div className="left">
            <span className="call-Icon">{<FaPhone />}</span>
            <span className="phoneNumber-Box">
              Our Phone Number: <p className="phoneNumber">+923040635922</p>
            </span>
          </div>
          <div className="right">
            <ul>
              <Link className="Link">
                <li className="Account-Box">
                  <span className="person-Icon">
                    <BsPersonFill />
                  </span>{" "}
                  <span>My Account</span>
                </li>
              </Link>
              <Link to={"/cart"} className="Link">
                <li>Cart</li>
              </Link>
              <Link className="Link">
                {" "}
                <li>Our Loaction</li>
              </Link>
              <Link className="Link">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
