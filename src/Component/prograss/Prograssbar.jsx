import React, { useEffect, useState } from "react";
import "./style.css";
const Prograssbar = ({ totalStock }) => {
  const [stockLeft, setStockLeft] = useState(totalStock);

  useEffect(() => {
    const timer = setInterval(() => {
      setStockLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 15000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="stock-container">
    <p className="stock-text"><p>Hurry! Only <span className="stock-value">{stockLeft}</span> left in stock.</p></p>
    <div className="stock-bar">
        <div
            className="stock-fill"
            style={{ width: `${(stockLeft / totalStock) * 100}%` }}
        ></div>
    </div>
</div>
  );
};

export default Prograssbar;
