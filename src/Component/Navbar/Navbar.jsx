import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.css";
import Logo from "../../Assets/Logo.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { BsCart4, BsCartPlus } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdRemove } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removefromcart,
} from "../../store/cartSlice";
import FreeShipping from "../freeShipping/FreeShipping";
import { Context } from "../../store/Context/Context";
import UseFetchStrapiData from "../../store/ApiUtility/fetch/useFetchStrapi/UseFetchStrapiData";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const sideCart = useRef(null);
  const [menuOpen, setMenu] = useState(false);

  const { data } = UseFetchStrapiData(`/api/products?populate=*`);

  const product = data?.data;

  const [hover, setHover] = useState(false);
  const [pageHover, setPageHover] = useState(false);

  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  const { cart, setCart } = useContext(Context);
  useEffect(() => {
    setHover(false);
    if (cart) {
      document.body.classList.add("overlay-active");
    } else {
      document.body.classList.remove("overlay-active");
    }

    return () => {
      document.body.classList.remove("overlay-active");
    };
  }, [cart]);

  const toggleButton = () => {
    setMenu(true);
  };

  const handleClickedOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu(false);
    }
  };
  const handleCartClickedOutSide = (event) => {
    if (sideCart.current && !sideCart.current.contains(event.target)) {
      setCart(false);
    }
  };
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMenu(false);
    }
  };
  useEffect(() => {
    setMenu(false);
  }, [navigate]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickedOutSide);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickedOutSide);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleCartClickedOutSide);
    return () => {
      document.removeEventListener("mousedown", handleCartClickedOutSide);
    };
  }, []);
  const HandleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
  });
  return (
    <div className={`navbar ${scroll ? "navbar-scroll" : ""}`}>
      <div className="content-wrapper">
        <div className="navbar-Container">
          <div className="logo">
            <Link to={"/"} className="Link">
              <img src={Logo} alt="Logo Icon" />
            </Link>
          </div>
          <div className="navbar-list">
            <ul>
              <Link to={"/"} className="Link">
                <li>
                  Home
                  <p className="icon">
                    <IoIosArrowDown />
                  </p>
                </li>
              </Link>

              <Link to={"/shop"} className="Link">
                {" "}
                <li>
                  Shop
                  <p className="icon">
                    <IoIosArrowDown />
                  </p>
                </li>
              </Link>

              <Link to={"/blog"} className="Link">
                <li>
                  Blog
                  <p className="icon">
                    <IoIosArrowDown />
                  </p>
                </li>
              </Link>
              <Link to={"/page"} className="Link">
                <li
                  onMouseEnter={() => setPageHover(true)}
                  onMouseLeave={() => setPageHover(false)}
                  className={``}
                >
                  Pages
                  <p className="icon">
                    <IoIosArrowDown />
                  </p>
                </li>
                <ul
                  className={`page-container ${pageHover ? "active" : ""}`}
                  onMouseEnter={() => setPageHover(true)}
                  onMouseLeave={() => setPageHover(false)}
                >
                  <Link to={"/faqs"} className="Link">
                    <li>Faqs</li>
                  </Link>{" "}
                  <Link to={"/about"} className="Link">
                    <li>About Me</li>
                  </Link>
                  <li>Our Shop</li>
                  <Link to={"/contact"} className="Link">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </Link>
              <div className="Page-Container"></div>

              <li
                className="Link feactureMargin"
                onClick={() => navigate(`/product/${product[0].id}`)}
              >
                Feature
                <p className="icon">
                  <IoIosArrowDown />
                </p>
              </li>
            </ul>
          </div>
          <div className="cart-Section">
            <span className="Heart-icon">
              <CiHeart />
              <span className="Heart-Value">0</span>
            </span>
            <div className="Cart-Item" onClick={() => setCart(true)}>
              <span className="icon">
                <BsCart4 />
              </span>
              <p>{cartItems?.length}</p>
              <div className="cart-Price">{`/ $ ${totalPrice}`}</div>
            </div>
            {menuOpen ? (
              <IoClose onClick={() => setMenu(false)} className="Menu-button" />
            ) : (
              <div className="Menu-button" onClick={toggleButton}>
                <GiHamburgerMenu />
              </div>
            )}

            {menuOpen && (
              <div className="side-bar" ref={menuRef}>
                <IoClose
                  onClick={() => setMenu(false)}
                  className="Menu-button sidebar-closeButton"
                />
                <ul>
                  <Link to={"/"} className="Link">
                    <li>
                      Home
                      <p className="Menu-icon">
                        <IoIosArrowDown />
                      </p>
                    </li>
                  </Link>

                  <Link to={"/shop"} className="Link">
                    {" "}
                    <li>
                      Shop
                      <p className="Menu-icon">
                        <IoIosArrowDown />
                      </p>
                    </li>
                  </Link>

                  <Link to={"/blog"} className="Link">
                    <li>
                      Blogs
                      <p className="Menu-icon">
                        <IoIosArrowDown />
                      </p>
                    </li>
                  </Link>
                  <Link to={"/page"} className="Link">
                    <li>
                      Pages
                      <p className="Menu-icon">
                        <IoIosArrowDown />
                      </p>
                    </li>
                  </Link>

                  <li className="Link" onClick={() => navigate("/product/18")}>
                    Feature
                    <p className="Menu-icon">
                      <IoIosArrowDown />
                    </p>
                  </li>
                </ul>
              </div>
            )}
            {cart && (
              <div
                className={`Side-Cart ${cart ? "active" : ""}`}
                ref={sideCart}
              >
                <div className="heading-container">
                  <h1>Shopping Cart</h1>
                  <p
                    onClick={() => setCart(false)}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    close{" "}
                    {hover ? (
                      <IoClose className="icon hover-icon" />
                    ) : (
                      <MdRemove className="icon default-icon" />
                    )}
                  </p>
                </div>
                <>
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems?.map((item, index) => (
                        <div className="cart-Item" key={index}>
                          <div className="cart-imageBox">
                            <img
                              src={"http://localhost:1337" + item?.img[0]?.url}
                              alt={item?.url?.name}
                            />
                          </div>
                          <div className="cart-textbox">
                            <p className="name">{item?.title}</p>
                            <div className="cart-Quantity-container">
                              <div className="cart-quantity">
                                <button
                                  onClick={() =>
                                    dispatch(decreaseQuantity(item.id))
                                  }
                                  disabled={item.quantity === 1}
                                >
                                  -
                                </button>
                                <span className="value">{item.quantity}</span>
                                <button
                                  onClick={() =>
                                    dispatch(increaseQuantity(item.id))
                                  }
                                >
                                  +
                                </button>
                              </div>
                              <div className="Cartitem-price">
                                <span>{`x $${item?.price}`}</span>
                              </div>
                            </div>
                          </div>
                          <span className="remove-Icon">
                            <IoClose
                              onClick={() => dispatch(removefromcart(item.id))}
                            />
                          </span>
                        </div>
                      ))}
                      <div className="sellerMsg">
                        <h2>Special instructions for seller</h2>
                        <textarea name="" id=""></textarea>
                      </div>
                      <div className="subtotal">
                        <h3>Subtotal:</h3>
                        <p>{`$${Number(totalPrice).toFixed(2)}`}</p>
                      </div>
                      <div className="freeShipping">
                        <FreeShipping totalPrice={totalPrice} />
                      </div>
                      <div className="term-condition cart-sidebar-padding">
                        <input type="checkbox" name="" id="" />
                        <span>
                          I agree with the{" "}
                          <Link
                            className="Link"
                            style={{ color: "black" }}
                            to={"/contact"}
                          >
                            <p>terms and conditions.</p>
                          </Link>
                        </span>
                      </div>
                      <div className="side-cart-Buttons">
                        <button
                          className="viewCart-btn"
                          onClick={() => navigate("/cart")}
                        >
                          view Cart
                        </button>
                        <button className="checkOut-btn">Check Out</button>
                      </div>
                    </>
                  ) : (
                    <div className="empty-cart">
                      <BsCartPlus className="cart-Icon" />

                      <h1>Your cart is currently empty.</h1>
                      <p>
                        Before proceed to checkout you must add some products to
                        your shopping cart. <br /> You will find a lot of
                        interesting products on our "Shop" page.
                      </p>
                      <button className="shop-button">Return To Shop</button>
                    </div>
                  )}
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
