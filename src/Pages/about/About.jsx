import React from "react";
import "./style.css";
import { GrFacebookOption } from "react-icons/gr";
import { FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";
const About = () => {
  return (
    <div className="about">
        <div className="about-container">
          <div className="image-box">
            <img src="./Assets/AboutImage.webp" alt="image" />
          </div>
          <div className="text-container">
            <h2>
              Consectetur lobortis <h3>maecenas risus mi lacus</h3>{" "}
              <h4> cond consequat.</h4>
            </h2>
            <p>
              Suspendisse leo sodales varius leo elementum vestibulum a elit at
              ultrices a mi a praesent enim libero ultrices a amet suscipit. A
              tempus iaculis habitasse suspendisse aenean parturient blandit a
              rutrum leo elementum purus a a et id non feugiat donec.
            </p>
            <img src="./Assets/Sign-image.webp" alt="Sign Image" />
            <div className="Icons-container">
              <span>
                <GrFacebookOption />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaGooglePlusG />
              </span>
              <span>
                <MdMail />
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
