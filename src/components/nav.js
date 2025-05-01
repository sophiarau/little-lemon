import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <div className="navigation">
          <ul>
            <li>
              <img src={logo} alt="Logo" className="logo" height="50px"/>
            </li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reserve a Table</Link></li>
            <li><Link to="">Order Online</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
