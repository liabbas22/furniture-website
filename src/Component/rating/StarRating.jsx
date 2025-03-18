import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < rating;
        return (
          <FaStar
            key={index}
            color={isFilled ? "#FFD700" : "#E0E0E0"}
            size={18}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
