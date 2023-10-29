import React from "react";

const TestimonialCard = ({ customerImage, customerName, customerReview }) => {
  const names = customerName.split(" ");
  return (
    <div className="review-card">
      <img src={customerImage} alt={customerName} />
      <h3>
        {names[0]} <span id="span">{names[1]}</span>
      </h3>

      <p>{customerReview}</p>
    </div>
  );
};

export default TestimonialCard;
