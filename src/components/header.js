import React from 'react';


function Header() {
  return (
    <header className="hero hero-container">
        <div className="hero-column hero-column-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="btn btn-reserve">Reserve a table</button>
        </div>
        <div className="hero-column hero-column-right">
          <img src="restarant.jpg" alt="Logo" className="hero-image" height="300px"/>
        </div>
    </header>
  );
}

export default Header;
