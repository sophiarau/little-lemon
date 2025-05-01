import React from "react";
import { useState } from "react";

function BookingForm() {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [occasion, setOccasion] = useState("None");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    return (
        <div className="bookingform">
            <div className="bookingheader"></div>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests" />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Graduation</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;