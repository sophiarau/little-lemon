import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";
import BookingForm from "./BookingForm";
import Nav from "./nav";
import Footer from "./footer";
import "../App.css";
import backdrop from "../assets/backdrop.jpeg";

export const initializeTimes = () => {
    return [
      '11:00', '12:00', '13:00', '14:00', '15:00', '16:00','17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
    ];
};

export const updateTimes = (state, action) => {
    switch(action.type) {
      case 'UPDATE_TIMES':
        return action.payload;
      default:
        return state;
    }
};

function BookingPage() {
    const navigate = useNavigate();
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        updateTimes,
        [],
        initializeTimes
      );

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/booking/confirmedbooking', { state: { formData } });
            return true;
        }
        return false;
    };

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
                    <BookingForm availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} submitForm={submitForm} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default BookingPage;