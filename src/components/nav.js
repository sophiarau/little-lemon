import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <img src={logo} alt="Logo" className="logo" height="50px"/>
          </li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link to="/booking">Reserve a Table</Link></li>
          <li><Link href="">Order Online</Link></li>
          <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
