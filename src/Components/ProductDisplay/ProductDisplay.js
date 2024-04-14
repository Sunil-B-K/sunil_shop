import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_i from "../Assests/star_icon.png";
import star_dull from "../Assests/star_dull_icon.png";
import { ShopContex } from "../../Contex/ShopContex";

function ProductDisplay(props) {
  const { addToCart } = useContext(ShopContex);

  const { product } = props;
  return (
    <div className="productDisplay">
      <div className="p-left">
        <div className="p-imageList">
          <img src={product.image} alt="d" />
          <img src={product.image} alt="s" />
          <img src={product.image} alt="r" />
          <img src={product.image} alt="y" />
        </div>

        <div className="p-displayImage">
          <img
            className="p-display-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      <div className="p-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-r-star">
          <img src={star_i} alt="star_i" />
          <img src={star_i} alt="star_i" />
          <img src={star_i} alt="star_i" />
          <img src={star_i} alt="star_i" />
          <img src={star_dull} alt="star_dull" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-r-prices">
          <div className="product-newprices">${product.new_price}</div>
          <div className="product-oldprices">${product.old_price}</div>
        </div>
        <div className="productdisplay-desc">
          fdjhnj ddidnild sunil kuligod dnkANIL KUULIGOD anfanil kuliidfoodn s
          uashjsd sueiadsmfd iruzvzmv ud ssfifsefuieuS ieeue aehawa u ee
        </div>
        <div className="product-size">
          <h1>SELECT SIZE</h1>
          <div className="product-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXl</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdiplsy-r-category">
          <span>Category:</span>Women,T-Shirt, Crop Top
        </p>
        <p className="productdiplsy-r-category">
          <span>Tags:</span>Morden,Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
