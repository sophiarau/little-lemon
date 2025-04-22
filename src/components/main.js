import React from 'react';
import MenuCard from './menucard';
import lemon from '/assets/lemon dessert.jpg';
import greekSalad from '/assets/greek salad.jpg';
import bruschetta from '/assets/bruschetta.jpg';
import food from '../assets/restauranfood.jpg';


function Main() {
  return (
    <main>
      <div className="main">
        <div className="highlights">
          <h1>Our Specials</h1>
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
