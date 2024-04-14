import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContex } from "../Contex/ShopContex";
import dropdown_icon from "../Components/Assests/dropdown_icon.png";
import Product from "../Components/Product/Product";
// import all_product from "../Components/Assests/all_product";
// import "../Components/Newcollections/Newcolections.css";
function Categerious(props) {
  const { all_product } = useContext(ShopContex);
  return (
    <div className="shop-Category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt={props.banner}
      />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>

        <div className="shopcotegory-Sort">
          Sort by
          <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>

      <div className="shopcategory-product">
        {/* shopcategory-product */}
        {all_product.map((data, i) => {
          if (props.category === data.category) {
            return (
              <Product
                key={i}
                id={data.id}
                name={data.name}
                image={data.image}
                old_price={data.old_price}
                new_price={data.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Expore</div>
    </div>
  );
}

export default Categerious;
