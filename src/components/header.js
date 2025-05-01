import React from 'react';
import restaurant from '../assets/restaurant.jpg';

function Header({buttonText}) {
  return (
    <header className="hero hero-container">
        <div className="hero-column hero-column-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="btn">{buttonText}</button>
        </div>
        <div className="hero-column hero-column-right">
          <img src={restaurant} alt="Logo" className="sticker" />
        </div>
    </header>
  );
}

export default Header;
