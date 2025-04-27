import React from 'react';
import MenuCard from './menucard';
import Testimonial from './testimonialcard';
import lemon from '../assets/lemondessert.jpg';
import greekSalad from '../assets/greeksalad.jpg';
import bruschetta from '../assets/Bruchettaimg.jpeg';
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
            <MenuCard name="dish1" price="12.00" description="this is a description" image={bruschetta} />
            <MenuCard name="dish2" price="22.00" description="this is a different description" image={lemon} />
            <MenuCard name="danny" price="priceless" description="this is a great description" image={greekSalad} />
            <MenuCard name="danny" price="so much" description="sexiest man alive" image={food} />
          </div>
        </div>
        <div className="testimonials">
          <div className="testimonials-header">
            <h1>CUSTOMER TESTIMONIALS</h1>
          </div>
          <div className="testimonialcards">
          <Testimonial user="John Doe" text="This is the best restaurant I have ever been to!"/>
          <Testimonial user="Jane Smith" text="The food was amazing and the service was excellent!"/>
          <Testimonial user="Alice Johnson" text="I can't wait to come back and try more dishes!"/>
          <Testimonial user="Bob Brown" text="The atmosphere was perfect for a romantic dinner!"/>
          </div>
        </div>
        <div className="about"></div>
      </div>
    </main>
  );
}

export default Main;
