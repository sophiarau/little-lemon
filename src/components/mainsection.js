import React from 'react';
import Highlights from './highlights';
import Testimonials from './testimonials';
import About from './about';

function MainSection() {
  return (
    <main>
      <div className="main">
          <Highlights />
          <Testimonials />
          <About />
      </div>
    </main>
  );
}

export default MainSection;
