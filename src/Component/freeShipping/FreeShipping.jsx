import React from "react";
import "./style.css";
const FreeShipping = ({ totalPrice }) => {
  const goal = 1000;
  const percentage = Math.min((totalPrice / goal) * 100, 100);
  const remainingAmount = Math.max(goal - totalPrice, 0);
  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          <span className="progress-value">{Math.round(percentage)}%</span>
        </div>
      </div>
      <p className="progress-text">
        {totalPrice >= goal ? (
          <div className="congratulation" style={{color:'white'}}>
            <span> Congratulations! You've got free shipping!</span>
          </div>
        ) : (
          <span className="remaning-Amount">
            Spend <strong>${remainingAmount.toFixed(2)}</strong> more to reach{" "}
            <strong>FREE SHIPPING! </strong>
            Continue shopping to add more products to your cart and receive free
            shipping for orders over $1,000.
          </span>
        )}
      </p>
    </div>
  );
};

export default FreeShipping;
