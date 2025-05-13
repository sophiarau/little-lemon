import React from 'react';
import MenuCard from './menucard';
import lemon from '../assets/pie.jpeg';
import greekSalad from '../assets/GreekSalad.jpeg';
import bruschetta from '../assets/Bruschettaimg.jpeg';
import pizza from '../assets/pizza.jpeg';
import basket from '../assets/Basket.svg';

function Highlights() {
  return (
    <div className="highlights">
          <div className="highlights-header">
            <h1>OUR SPECIALS</h1>
            <div className="highlights-header-button">
              <img src={basket} alt="Cart icon" width="48px" height="48px"/>
              <button className="order-button">Order Online</button>
            </div>
          </div>
          <div className="highlights-container">
            <MenuCard name="dish1" price="12.00" description="this is a description" image={bruschetta} />
            <MenuCard name="dish2" price="22.00" description="this is a different description" image={lemon} />
            <MenuCard name="diushh" price="priceless" description="this is a great description" image={greekSalad} />
            <MenuCard name="dishh" price="so much" description="wowowowowoww" image={pizza} />
          </div>
        </div>
)}
export default Highlights;