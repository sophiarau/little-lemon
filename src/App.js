import './App.css';
import Header from './components/header.js';
import Nav from './components/nav.js';
import Main from './components/main.js';
import Footer from './components/footer.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './components/BookingPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
