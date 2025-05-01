import React from "react";
import BookingForm from "./BookingForm";
import Nav from "./nav";
import Footer from "./footer";
import "../App.css";

function BookingPage() {
    return (
        <div className="bookingpage">
            <Nav />
            <div className="bookingheader">
                <div className="bookingheadertext">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
            </div>
            <div className="bookingmain">
                <div className="bookingform">
                    <BookingForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default BookingPage;