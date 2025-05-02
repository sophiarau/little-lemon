import React from "react";
import { useReducer } from "react";

import BookingForm from "./BookingForm";
import Nav from "./nav";
import Footer from "./footer";
import "../App.css";
import backdrop from "../assets/backdrop.jpeg";

export const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return ['10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM'];
      default:
        return state;
    }
  };

export const initializeTimes = () => {
    return [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM'];
  };

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return (
        <div className="bookingpage">
            <Nav />
            <div className="bookingheader">
                <div className="bookingheadertext">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
            </div>
            <div className="bookingmain"
                style={{
                    backgroundImage: `url(${backdrop})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}>
                <div className="bookingformcontainer">
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default BookingPage;