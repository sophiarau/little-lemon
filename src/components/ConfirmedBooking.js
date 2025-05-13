import React from "react";
import "../App.css";
import Nav from "./nav";
import Footer from "./footer";
import { Link, useLocation } from "react-router-dom";
import backdrop from "../assets/backdrop.jpeg";

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div className="ConfirmedBooking">
      <Nav className="confirmed-nav" />
      <div className="confirmedmain"
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
    }}>
        <div className="confirmedcontainer">
          <div className="confirmedheader">
            <h1>🎉 Booking Confirmed!</h1>
            <p>Thank you for your reservation, {formData?.Name}. We look forward to seeing you, on {formData?.date}, at {formData?.time}!</p>
          </div>
          <Link to="/">
            <button className="btn">Back to Home</button>
          </Link>
        </div>
      </div>
      <Footer className="confirmed-footer" />
    </div>
  );
}

export default ConfirmedBooking;