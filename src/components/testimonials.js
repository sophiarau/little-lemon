import React from "react";
import TestimonialCard from "./testimonialcard.js";

function Testimonials() {
  return (
    <div className="testimonials">
          <div className="testimonials-header">
            <h1>CUSTOMER TESTIMONIALS</h1>
            <div className="testimonials-header-button">
              <button className="review-button">Leave a Review!</button>
            </div>
          </div>
          <div className="testimonialcards">
          <TestimonialCard user="John Doe" text="This is the best restaurant I have ever been to!"/>
          <TestimonialCard user="Jane Smith" text="The food was amazing and the service was excellent!"/>
          <TestimonialCard user="Alice Johnson" text="I can't wait to come back and try more dishes!"/>
          <TestimonialCard user="Bob Brown" text="The atmosphere was perfect for a romantic dinner!"/>
          </div>
        </div>
)}
export default Testimonials;