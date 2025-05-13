import React from "react";
import A from '../assets/MandAa.jpg';
import B from '../assets/MandAb.jpg';

function About() {
    return (
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
)}
export default About;