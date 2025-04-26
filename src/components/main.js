import React from 'react';
import MenuCard from './menucard';
import lemon from '../assets/lemondessert.jpg';
import greekSalad from '../assets/greeksalad.jpg';
import bruschetta from '../assets/bruchetta.jpeg';
import food from '../assets/restauranfood.jpg';
import basket from '../assets/Basket.svg';


function Main() {
  return (
    <main>
      <div className="main">
        <div className="highlights">
          <div className="highlights-header">
            <h1>OUR SPECIALS</h1>
            <div className="highlights-header-button">
              <img src={basket} alt="Cart icon" width="48px" height="48px"/>
              <button className="order-button">Order Online</button>
            </div>
          </div>
          <div className="highlights-container">
            <MenuCard name="dish1" price="12.00" description="this is a description" image={bruschetta} className="menucard card1"/>
            <MenuCard name="dish2" price="22.00" description="this is a different description" image={lemon} className="menucard card2"/>
            <MenuCard name="danny" price="priceless" description="this is a great description" image={greekSalad} className="menucard card3"/>
            <MenuCard name="danny" price="so much money" description="sexiest man alive" image={food} className="menucard card4"/>
          </div>
          </div>
        <div className="testimonials"></div>
        <div className="about"></div>
      </div>
    </main>
  );
}

export default Main;
