import React from "react";
import "./style.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait, IoIosSend } from "react-icons/io";
const Footer = () => {
  return (
    <div className="footer">
      <div className="content-wrapper">
        <div className="footer-icons">
          <FaFacebookF />
          <FaTwitter />
          <MdEmail className="emailIcon" />
        </div>
        <div className="footer-container">
          <div className="ourstore footerlist">
            <h3>OUR STORES</h3>
            <ul>
              <li>New York</li>
              <li>London SF</li>
              <li>Cockfosters BP</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Las Vegas</li>
            </ul>
          </div>

          <div className="footerlist">
            <h3>INFORMATION</h3>
            <ul>
              <li>About Store</li>
              <li>New Collection</li>
              <li>Woman Dress</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>

          <div className="footerlist ourstore">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Returns</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>
          <div className="footerlist">
            <h3>FOOTER MENU</h3>
            <ul>
              <li>Instagram profile</li>
              <li>New Collection</li>
              <li>Woman Dress</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Purchase Theme</li>
            </ul>
          </div>
          <div className="footerlist about">
            <h3>About The Store</h3>
            <ul>
              <p>
                STORE - worldwide fashion store since 1978. We sell over 1000+
                branded products on our web-site.
              </p>
              <div className="list-icons">
                <span>
                  <IoIosSend />
                </span>
                <p> 451 Wall Street, USA, New York</p>
              </div>
              <div className="list-icons">
                <span>
                  <IoIosPhonePortrait />
                </span>
                <p>+923040635922</p>
              </div>
              <div className="list-image">
                <img src="./Assets/Share.png" alt="" />
              </div>
            </ul>
          </div>
        </div>
        <div className="border-text">
          <p> 2025 Created by The studio. Premium e-commerce solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
