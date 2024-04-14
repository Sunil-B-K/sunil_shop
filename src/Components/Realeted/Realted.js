import React from "react";
import "../Popular/Popular.css";
import data_product from "../Assests/data";
import Product from "../Product/Product";

function Realted() {
  return (
    <div className="popular">
      <h1>Releted Product</h1>
      <hr />
      <div className="popolar-item">
        {data_product.map((data, i) => {
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
        })}
      </div>
    </div>
  );
}

export default Realted;
