import React from 'react';
import MenuCard from './menucard';
import Testimonial from './testimonialcard';
import lemon from '../assets/pie.jpeg';
import greekSalad from '../assets/GreekSalad.jpeg';
import bruschetta from '../assets/Bruschettaimg.jpeg';
import pizza from '../assets/pizza.jpeg';
import basket from '../assets/Basket.svg';
import A from '../assets/MandAa.jpg';
import B from '../assets/MandAb.jpg';

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
            <MenuCard name="diushh" price="priceless" description="this is a great description" image={greekSalad} />
            <MenuCard name="dishh" price="so much" description="wowowowowoww" image={pizza} />
          </div>
        </div>
        <div className="testimonials">
          <div className="testimonials-header">
            <h1>CUSTOMER TESTIMONIALS</h1>
            <div className="testimonials-header-button">
              <button className="review-button">Leave a Review!</button>
            </div>
          </div>
          <div className="testimonialcards">
          <Testimonial user="John Doe" text="This is the best restaurant I have ever been to!"/>
          <Testimonial user="Jane Smith" text="The food was amazing and the service was excellent!"/>
          <Testimonial user="Alice Johnson" text="I can't wait to come back and try more dishes!"/>
          <Testimonial user="Bob Brown" text="The atmosphere was perfect for a romantic dinner!"/>
          </div>
        </div>
        <div className="about">
          <div className="aboutcontainer">
            <div className="aboutleft">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>Lorem ipsum dolor sit emet, consectetur adipiscing elit, sed do eiusmos tempor incifiduntstlshoreetdoloremegnesliqua. Amet minim mollit non deserunt ullameo est sit aliqua dolor do amet sint. Velit officia consequat duis enim consequel sunt nostrud amel Aret minim mollit non deserunt ullamco est sit aliqua dolor do amet Cindere consorsue crim volit mollit.</p>
            </div>
            <div className="aboutright">
              <div className="image-wrapper">
                <img src={A} alt="Mario and Adrian" className="image-overlay" />
                <img src={B} alt="Mario and Adrian" className="image-main" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
