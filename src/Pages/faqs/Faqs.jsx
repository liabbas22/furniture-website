import React, { useState } from "react";
import "./style.css";
import { MdArrowBack, MdOutlineMail } from "react-icons/md";
import { LuClock8, LuMessageCircle } from "react-icons/lu";
import { SlRocket } from "react-icons/sl";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiPaperclip } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
const Faqs = () => {
  const [formatData, setFormatData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const HandleChange = (e) => {
    setFormatData({ ...formatData, [e.target.name]: e.target.value });
  };
  const HandleSumbit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formatData);
    alert("Your question has been submitted!");
    setFormatData({ name: "", email: "", message: "" });
  };

  const [clicked, setClicked] = useState(null);
  const [category, setCategory] = useState("Sale");
  const categories = ["Sale", "Terms & Conditions", "Privacy Policy"];

  const toggleAnswer = (index) => {
    setClicked(clicked === index ? null : index);
  };
  const SaleData = [
    {
      id: 1,
      title: "I haven't received my item. What can I do?",
      p1: "Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
      p2: "Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
    },
    {
      id: 2,
      title: "I haven't received my item. What can I do?",
      p1: "Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
      p2: "Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
    },
    {
      id: 3,
      title: "I haven't received my item. What can I do?",
      p1: "Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
      p2: "Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
    },
    {
      id: 4,
      title: "I haven't received my item. What can I do?",
      p1: "Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
      p2: "Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
    },
    {
      id: 5,
      title: "I haven't received my item. What can I do?",
      p1: "Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
      p2: "Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
    },
    {
      id: 6,
      title: "I haven't received my item. What can I do?",
      p1: "Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing a dignissim eu a ad venenatis. Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
      p2: "Non vivamus enim himenaeos porta id morbi montes ut sem scelerisque in litora id scelerisque consectetur eget cras hac nascetur sociis in feugiat mi platea odio pretium ullamcorper.",
    },
  ];
  return (
    <>
      <div className="faqs">
        <div className="content-wrapper">
          <h1>Faqs</h1>
          <div className="Faq-Icon">
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
        </div>
      </div>
      <div className="faq-information">
        <div className="content-wrapper">
          <div className="faq-Container">
            <h1>FaQs. General Information</h1>
            <div className="faq-information-container">
              <div className="box">
                <h3>Eu dictumst cum at sed euismod condimentum?</h3>
                <p>
                  Justo est cum sit fames ac convallis est non leo rhoncus
                  feugiat scelerisque tempus nec sapien vestibulum dis
                  parturient felis a taciti.
                </p>
              </div>
              <div className="box">
                <h3>Eu dictumst cum at sed euismod condimentum?</h3>
                <p>
                  Justo est cum sit fames ac convallis est non leo rhoncus
                  feugiat scelerisque tempus nec sapien vestibulum dis
                  parturient felis a taciti.
                </p>
              </div>
              <div className="box">
                <h3>Eu dictumst cum at sed euismod condimentum?</h3>
                <p>
                  Justo est cum sit fames ac convallis est non leo rhoncus
                  feugiat scelerisque tempus nec sapien vestibulum dis
                  parturient felis a taciti.
                </p>
              </div>
              <div className="box">
                <h3>Eu dictumst cum at sed euismod condimentum?</h3>
                <p>
                  Justo est cum sit fames ac convallis est non leo rhoncus
                  feugiat scelerisque tempus nec sapien vestibulum dis
                  parturient felis a taciti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-bottom-container">
        <div className="content-wrapper">
          <div className="faq-bottom-container-info">
            <div className="faq-details">
              <div className="faq-details-header chairCategory-header">
                {categories?.map((item, index) => (
                  <span key={item}>
                    <p
                      className={`text ${category === item ? "active" : ""}`}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </p>
                    {index < categories.length - 1 && (
                      <p className="salash">/</p>
                    )}
                  </span>
                ))}
              </div>
              {category === "Sale" && (
                <div className={`sale-container`}>
                  {SaleData?.map((item, index) => (
                    <div className="saleQuestionAnswer" key={index}>
                      <div className="Question">
                        <span>{item.title}</span>
                        <IoIosArrowDown
                          className={`arrow ${
                            clicked === index ? "Arrow-rotate" : ""
                          }`}
                          onClick={() => toggleAnswer(index)}
                        />
                      </div>
                      {clicked === index && (
                        <div
                          className={`Answer ${
                            clicked === index ? "Answer-transition" : ""
                          }`}
                        >
                          <p>{item?.p1}</p>
                          <p>{item.p2}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {category === "Terms & Conditions" && (
                <div className="sale-container">
                  {SaleData?.map((item, index) => (
                    <div className="saleQuestionAnswer" key={index}>
                      <div className="Question">
                        <span>{item.title}</span>
                        <IoIosArrowDown
                          className={`arrow ${
                            clicked === index ? "Arrow-rotate" : ""
                          }`}
                          onClick={() => toggleAnswer(index)}
                        />
                      </div>
                      {clicked === index && (
                        <div
                          className={`Answer ${
                            clicked === index ? "Answer-transition" : ""
                          }`}
                        >
                          <p>{item?.p1}</p>
                          <p>{item.p2}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {category === "Privacy Policy" && (
                <div className="sale-container">
                  {SaleData?.map((item, index) => (
                    <div className="saleQuestionAnswer" key={index}>
                      <div className="Question">
                        <span>{item.title}</span>
                        <IoIosArrowDown
                          className={`arrow ${
                            clicked === index ? "Arrow-rotate" : ""
                          }`}
                          onClick={() => toggleAnswer(index)}
                        />
                      </div>
                      {clicked === index && (
                        <div
                          className={`Answer ${
                            clicked === index ? "Answer-transition" : ""
                          }`}
                        >
                          <p>{item?.p1}</p>
                          <p>{item.p2}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="Ask-Question">
              <h2>Ask a Question</h2>
              <p>
                Sed primis eu conubia erat ut nam vitae a habitant dui
                adipiscing a dignissim eu a ad venenatis. Non vivamus enim
                himenaeos porta id morbi montes ut sem scelerisque in
              </p>
              <form className="input-container" onSubmit={HandleSumbit}>
                <div className="input">
                  <span>Your Name</span>
                  <input
                    type="text"
                    value={formatData.name}
                    name="name"
                    onChange={HandleChange}
                    required
                  />
                </div>
                <div className="input email">
                  <span>Your Email (required)</span>
                  <input
                    type="email"
                    name="email"
                    value={formatData.email}
                    onChange={HandleChange}
                    required
                  />
                </div>
                <div className="input">
                  <span>Your Message</span>
                  <textarea
                    name="message"
                    id=""
                    value={formatData.message}
                    onChange={HandleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Ask a Question
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="faqBottom">
          <div className="col">
            <span>
              <FiPaperclip />
            </span>
            <h3>3200</h3>
            <p>TOPICS CREATED</p>
          </div>
          <div className="col">
            <span>
              <FaRegStar />
            </span>
            <h3>180</h3>
            <p>HAPPY CUSTOMERS</p>
          </div>
          <div className="col">
            <span>
              <IoDiamondOutline />
            </span>
            <h3>5</h3>
            <p>YEAR OF DEVELOPING</p>
          </div>
          <div className="col">
            <span>
              <LuMessageCircle />
            </span>
            <h3>5000</h3>
            <p>ANSWERED QUESTIONS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
