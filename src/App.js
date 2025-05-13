import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Footer from './components/footer.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage.js';
import MainSection from './components/mainsection.js';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/confirmedbooking" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <Nav />
      <Header buttonText="Reserve a Table"/>
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;