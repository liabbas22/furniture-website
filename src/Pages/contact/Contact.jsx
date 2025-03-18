import React from "react";
import "./style.css";
import { MdOutlineMail } from "react-icons/md";
import { RiFacebookFill, RiSendPlaneLine } from "react-icons/ri";
import { SlRocket } from "react-icons/sl";
import { LuClock8 } from "react-icons/lu";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Contact = () => {
  const HandleSumbit = (e) => {
    e.prevantDefault();
    alert("Your Data Save Successfully!");
  };
  return (
    <div className="contact">
      <div className="content-wrapper">
        <div className="contact-container">
          <form className="input-container" onSubmit={HandleSumbit}>
            <div className="Heading">
              <h2>GET IN TOUCH WITH US</h2>
              <span></span>
            </div>
            <div className="name-container">
              <div className="name Input">
                <span>Your Name</span>
                <input type="text" required />
              </div>
              <div className="emial Input">
                <span>Your Email (required)</span>
                <input type="email" required />
              </div>
            </div>
            <div className="phone-number Input">
              <span>Your Phone Number</span>
              <input type="number" />
            </div>
            <div className="textarea-container Input">
              <span>Your Message</span>
              <textarea name="" id=""></textarea>
            </div>
            <button type="submit">SEND A MESSAGE</button>
          </form>
          <div className="information-container">
            <div className="Heading">
              <h2>INFORMATION ABOUT US</h2>
              <span></span>
            </div>
            <p>
              Consectetur aliquet a erat per sem nisi leo placerat dui a
              adipiscing a sagittis vestibulum. Sagittis posuere id nam quis
              vestibulum faucibus a est tristique ridiculus sed.
            </p>
            <p>
              Sagittis posuere id nam quis vestibulum vestibulum a facilisi at
              elit hendrerit scelerisque sodales nam dis orci non aliquet enim.
            </p>
            <div className="Heading">
              <h2>CONTACT US</h2>
              <span></span>
            </div>
            <div className="contactUS-containerIcons">
              <div className="Icon">
                <span className="icon">
                  <MdOutlineMail />
                </span>
                <div className="text-container">
                  <p>Phone: 03040635922</p>
                  <p>EMail:aa1639987@gmail.com</p>
                </div>
              </div>
              <div className="Icon">
                <span className="icon">
                  <RiSendPlaneLine />
                </span>
                <div className="text-container">
                  <p>20 Margaret St, London</p>
                  <p>Great Britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="Icon">
                <span className="icon">
                  <SlRocket />
                </span>
                <div className="text-container">
                  <p>Free standard shipping</p>
                  <p>on all orders in New York</p>
                </div>
              </div>
              <div className="Icon">
                <span className="icon">
                  <LuClock8 />
                </span>
                <div className="text-container">
                  <p>Support forum provide</p>
                  <p>for over 24h, every day.</p>
                </div>
              </div>
            </div>
            <div className="social-Icon">
              <span className="faceIcon">
                <RiFacebookFill />
              </span>
              <span className="twitterIcon">
                <FaTwitter />
              </span>
              <span className="GoogleIcon">
                <FaGooglePlusG />
              </span>
              <span className="MailICon">
                <IoMail />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
