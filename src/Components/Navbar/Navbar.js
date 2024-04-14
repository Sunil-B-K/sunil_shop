import React, { useContext, useRef, useState } from "react";
import logo from "../Assests/logo.png";
import cart from "../Assests/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContex } from "../../Contex/ShopContex";
import dropdown1 from "../Assests/dropdown1.png";

function Navbar() {
  const [menu, setmenu] = useState("shop");
  const { getTotalcartItems } = useContext(ShopContex);
  const menuRef = useRef();
  const dropdwon_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");

    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="n-logo">
          <img src={logo} alt="logo" />
          <p>sunil</p>
        </div>
      </Link>
      <img
        className="nav-dropdown"
        onClick={dropdwon_toggle}
        src={dropdown1}
        alt="dropdown1"
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setmenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            shop
          </Link>

          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            mens
          </Link>

          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            kids
          </Link>

          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("womens");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            womens
          </Link>

          {menu === "womens" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="n-cart">
        {localStorage.getItem("Auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("Auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            {" "}
            <button>login</button>
          </Link>
        )}

        <Link to="/cart" style={{ textDecoration: "none" }}>
          {" "}
          <img src={cart} alt="cart" />{" "}
        </Link>
        <div className="n-cartcount">{getTotalcartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
