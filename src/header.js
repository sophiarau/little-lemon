import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo" style={{ height: '60px' }} />
        <h1>Welcome to My Website</h1>
    </header>
  );
}

export default Header;
