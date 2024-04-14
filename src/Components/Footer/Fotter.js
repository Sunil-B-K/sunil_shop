import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import whatsapp from "../Assests/whatsapp_icon.png";
import instgram from "../Assests/instagram_icon.png";
import pin from "../Assests/pintester_icon.png";
function Fotter() {
  return (
    <div className="footer">
      <div className="f-logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>SUNIL</p>
      </div>

      <ul className="f-links">
        <li>Company</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        <li>Products</li>
      </ul>
      <div className="f-solicailincons">
        <div className="f-Icon-container">
          <img src={whatsapp} alt="whatsapp" />{" "}
        </div>

        <div className="f-Icon-container">
          <img src={instgram} alt="instgram" />
        </div>
        <div className="f-Icon-container">
          <img src={pin} alt="pin" />
        </div>
      </div>
      <div className="f-copywrite">
        <hr />
        <p>Copywrite @ 2024 All right Reserved.</p>
      </div>
    </div>
  );
}

export default Fotter;
