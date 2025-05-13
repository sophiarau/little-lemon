import { Route, Routes, useNavigate } from "react-router-dom";
import BookingPage from './components/BookingPage.js';
import ConfirmedBooking from './components/ConfirmedBooking.js';
import Home from './components/Home.js';

const Main = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage submitForm={submitForm} />} />
            <Route path="/confirmation" element={<ConfirmedBooking />} />
          </Routes>
        </Router>
      );
}
export default Main;