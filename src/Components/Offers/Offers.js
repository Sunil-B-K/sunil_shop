import React from "react";
import "./Offers.css";
import exclusive from "../Assests/exclusive_image.png";
function Offers() {
  return (
    <div className="offer">
      <div className="o-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="o-right">
        <img src={exclusive} alt="offers" />
      </div>
    </div>
  );
}

export default Offers;
