import React from "react";
import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("None");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const reservation = {
            Name,
            email,
            occasion,
            guests,
            date,
            time
        };
        setName("");
        setEmail("");
        setOccasion("None");
        setGuests(1);
        setDate("");
        setTime("17:00");
        console.log(reservation);
        alert(`Thank you! Reservation made for ${Name} on ${date} at ${time} for ${guests} guests.`);
    }
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        setTime("");
        dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
      };
      return (
        <div className="bookingform">
            <div className="bookingformheader">
                <h1>Book a Table!</h1>
                <p>We are open for reservations. <br /> Feel free to call with any questions!</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    className="forminput"
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    className="forminput"
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="res-date">Date:</label>
                <input
                    className="forminput"
                    required
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange} />

                <label htmlFor="res-time">Time:</label>
                <select id="res-time"
                    className="forminput"
                    value={time}
                    required
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of Guests:</label>
                <input
                    className="forminput"
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests" />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    className="forminput"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Graduation</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your Reservation" className="bookingbutton" />
            </form>
        </div>
    );
}

export default BookingForm;