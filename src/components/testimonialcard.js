import React from "react";

function Testimonial({ user, text }) {
  return (
    <div className="testimonialcard">
        <div className="testimonialrating">
            <h1>★★★★★</h1>
        </div>
        <div className="testimonialuser">
            <h1>{user}</h1>
        </div>
        <div className="testimonialtext">
            <p>{text}</p>
        </div>
    </div>
  );
}
export default Testimonial;
