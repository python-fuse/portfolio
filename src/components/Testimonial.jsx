import React from "react";
import TestimonialCard from "./TestimonialCard";
import avatar from "../assets/avatar.jpg";

const Testimonial = () => {
  const customers = [
    {
      name: "John Doe",
      image: avatar,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Mary Doe",
      image: avatar,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      name: "Lilian Doe",
      image: avatar,
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const testimonials = customers.map((customer) => {
    return (
      <TestimonialCard
        key={customer.name}
        customerName={customer.name}
        customerImage={customer.image}
        customerReview={customer.review}
      />
    );
  });
  return (
    <div className="testimonial-section">
      <h2 className="section">
        Testi<span>monials</span>
      </h2>
      <div className="testimonials">{testimonials}</div>
    </div>
  );
};

export default Testimonial;
