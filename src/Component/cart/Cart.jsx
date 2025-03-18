import React, { useEffect, useState } from "react";
import "./style.css";
import { MdCancel, MdHome } from "react-icons/md";
import TopContainer from "../topContainer/TopContainer";
import { useDispatch, useSelector } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { loadStripe } from "@stripe/stripe-js";
import {
  removefromcart,
  increaseQuantity,
  decreaseQuantity,
  clearChat,
} from "../../store/cartSlice";
import { IoMdRemoveCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import FreeShipping from "../freeShipping/FreeShipping";
import { makePaymentRequest } from "../../store/ApiUtility/api";
const Cart = () => {
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  console.log("Check CartItems", cartItems);

  const stripePromise = loadStripe(
    "pk_test_51R2w08DE9iSzaiGtcipXn1s99I5kCcmjpCAN5DEA7ly55tn5m0OLiMkq6XbFKY1fhfW6uwTeBr48nuQQhKFhyyLe00ftECqB6u"
  );
  const handlePaymnent = async () => {
    try {
      console.log("Starting payment...");
      const stripe = await stripePromise;

      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems,
      });

      console.log("Response from backend:", res.data);

      if (!res.data.stripeSession || !res.data.stripeSession.id) {
        console.error("Stripe session ID is missing!", res.data);
        return;
      }

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <>
      <TopContainer title={"Cart"} text={"cart"} />
      <div className="content-wrapper">
        <div className="cart-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <BsCartPlus className="cart-Icon" />

              <h1>Your cart is currently empty.</h1>
              <p>
                Before proceed to checkout you must add some products to your
                shopping cart. <br /> You will find a lot of interesting
                products on our "Shop" page.
              </p>
              <button className="shop-button">Return To Shop</button>
            </div>
          ) : (
            <>
              <div className="value-cart">
                <div className="value-cart-container">
                  <div className="cart-heading">
                    <div className="col1">
                      {" "}
                      <span>Product</span>
                    </div>
                    <div className="col1">
                      <span>Price</span>
                    </div>
                    <div className="col1">
                      <span>Quantity</span>
                    </div>
                    <div className="col1">
                      <span>Total</span>
                    </div>
                  </div>
                  {cartItems?.map((item, index) => (
                    <div className="cart-body" key={item.id}>
                      <div className="cart-product">
                        <div
                          className="remove-icon"
                          onMouseEnter={() => setHover(item.id)}
                          onMouseLeave={() => setHover(null)}
                        >
                          {hover === item.id ? (
                            <IoMdRemoveCircle
                              onClick={() => dispatch(removefromcart(item.id))}
                              className="show"
                            />
                          ) : (
                            <MdCancel className="hide" />
                          )}
                        </div>
                        <div className="img-box">
                          <img
                            src={"http://localhost:1337" + item?.img[0]?.url}
                            alt={item?.url?.name}
                          />
                        </div>
                        <div className="text-box">
                          <p className="name">{item?.title}</p>
                          {/* <p className="color">{`color: Brown`}</p>  */}
                        </div>
                      </div>
                      <div className="cart-price">
                        <span>{`$${item.price}`}</span>
                      </div>
                      <div className="cart-quantity">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="value">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                      <div className="itemtotal-price">
                        {`$${(item.price * item.quantity).toFixed(2)}`}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-buttons">
                  <button
                    className="clearbutton"
                    onClick={() => dispatch(clearChat())}
                  >
                    Clear Shoping Cart
                  </button>
                  <button
                    className="updatebutton"
                    onClick={() => navigate("/shop")}
                  >
                    Update Cart
                  </button>
                </div>
                <div className="checkout-container">
                  <div className="sellerMsg">
                    <h2>Special instructions for seller</h2>
                    <textarea cols="50" rows="5"></textarea>
                  </div>
                  <div className="Cart-Totals">
                    <h2>Cart Totals</h2>
                    <div className="cart-tolal-container">
                      <div className="subtotal">
                        <h3>Subtotal:</h3>
                        <p>{`$${Number(totalPrice).toFixed(2)}`}</p>
                      </div>
                      <div className="Total">
                        <h1>Total:</h1>
                        <h3>{`$${Number(totalPrice).toFixed(2)}`}</h3>
                      </div>
                    </div>
                    <FreeShipping totalPrice={totalPrice} />

                    <div className="term-condition">
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
                    <div className="buttons">
                      <button onClick={handlePaymnent}>
                        Proceed To ChechOut
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
