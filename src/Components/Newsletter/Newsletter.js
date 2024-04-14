import React from "react";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div className="nwesletter">
      <h1>Get Exclusive Offres On Your Email</h1>
      <p>Subscribe to our newslleter stay updated</p>
      <div>
        <input type="email" placeholder="your email id" required />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Newsletter;
