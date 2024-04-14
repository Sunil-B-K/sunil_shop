import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContex } from "../../Contex/ShopContex";
import remove_icon from "../Assests/cart_cross_icon.png";
function CartItems() {
  const { getTotalCartAmmount, all_product, cartItem, removeFromcart } =
    useContext(ShopContex);
  return (
    <div className="cartItems">
      <div className="cart-format-menu">
        <p>Products</p>
        <p>Title</p>
        <p>prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-format  cart-format-menu">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cartitem-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitem-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className="remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromcart(e.id)}
                  alt="remove_icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-totol">
          <h1> Cart Total </h1>
          <div>
            <div className="cart-total-item">
              <p>subTittle</p>
              <p>${getTotalCartAmmount()}</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <p>Shipping Fee </p>
              <p> Free</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <h3>Total </h3>
              <h3> ${getTotalCartAmmount()}</h3>
            </div>
          </div>
          <button>PRODUCED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If You Have Prome code Enter it here</p>
          <div className="promo-box">
            <input type="text" placeholder="promoCode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
