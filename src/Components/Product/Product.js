import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
        />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-newprize">${props.new_price}</div>
        <div className="item-oldprize">${props.old_price}</div>
      </div>
    </div>
  );
}

export default Product;
