import React from 'react';
import footerLogo from '../assets/footlogo.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footercontainer">
          <div className="footerlogo">
            <img src={footerLogo} alt="footer logo" />
          </div>
          <div className="footerlinks footernav">
            <h3 className="footerheader">Navigation</h3>
            <ul className="list">
              <li>
                <Link to="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Menu</p>
              </li>
              <li>
                <Link to="/booking">
                  <p>Reservations</p>
                </Link>
              </li>
              <li>
                <p>Order Online</p>
              </li>
              <li>
                <p>Login</p>
              </li>
            </ul>
          </div>
          <div className="footerlinks footercontact">
          <h3 className="footerheader">Contact</h3>
            <ul className="list">
              <li>
                <p>Address</p>
              </li>
              <li>
                <p>Phone Number</p>
              </li>
              <li>
                <p>Email</p>
              </li>
            </ul>
          </div>
          <div className="footerlinks footersocials">
          <h3 className="footerheader">Social Pages</h3>
            <ul className="list">
              <li>
                <p>Instagram</p>
              </li>
              <li>
                <p>Facebook</p>
              </li>
              <li>
                <p>Twitter</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
