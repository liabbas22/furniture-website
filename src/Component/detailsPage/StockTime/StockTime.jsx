import React, { useEffect, useState, useCallback } from "react";
import "./style.css";

const StockTime = () => {
  const discountEndTime = new Date(2025, 2, 11, 10, 0, 0).getTime();

  const calculateTimeLeft = useCallback(() => {
    const difference = discountEndTime - Date.now();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [discountEndTime]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());

      if (
        timeLeft.days === 0 &&
        timeLeft.hours === 0 &&
        timeLeft.minutes === 0 &&
        timeLeft.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, timeLeft]);

  return (
    <div className="stockTimer">
      {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
        <div key={index} className={`${unit.toLowerCase()} col`}>
          <h3>{timeLeft[unit.toLowerCase()]}</h3>
          <span>{unit}</span>
        </div>
      ))}
    </div>
  );
};

export default StockTime;
