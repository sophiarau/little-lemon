import React from 'react';
import logo from '../assets/Logo.svg';

function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <img src={logo} alt="Logo" className="logo" height="50px"/>
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/src/components/BookingPage.js">Order Online</a></li>
          <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
