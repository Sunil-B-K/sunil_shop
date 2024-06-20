import React, { useEffect, useState } from "react";

import "./Newcolections.css";
// import newCollection from "../Assests/new_collections";
import Product from "../Product/Product";

function Newcollections() {
  const [newCollection, setnewCollection] = useState([]);
  useEffect(() => {
    fetch("https://startling-faloodeh-fd04b5.netlify.app/newcollection")
      .then((response) => response.json())
      .then((data) => setnewCollection(data));
  }, []);

  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="popolar-item">
        {newCollection.map((data, i) => {
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

export default Newcollections;
