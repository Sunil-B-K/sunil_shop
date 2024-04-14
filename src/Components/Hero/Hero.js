import React from "react";
import "./Hero.css";
import hand from "../Assests/hand_icon.png";
import arrow from "../Assests/arrow.png";
import hero from "../Assests/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="h-left">
        <h2>new arrivals only</h2>
        <div>
          <div className="h-handicon">
            <p>New</p>
            <img src={hand} alt="hand" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="h-lestest-btn">
          <div>Latest Collections</div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>

      <div className="h-right>">
        <img className="heroimage" src={hero} alt="Herro" />
      </div>
    </div>
  );
}

export default Hero;
