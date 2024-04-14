import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import { ShopContex } from "../Contex/ShopContex";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Desprication from "../Components/Desprication/Desprication";
import Realted from "../Components/Realeted/Realted";
// import all_product from "../Components/Assests/all_product";

function Products() {
  const { all_product } = useContext(ShopContex);

  const { productId } = useParams();
  // const product = all_product.find((e) => productId === e.id);

  const product = all_product.find((item) => item.id === Number(productId));

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <Desprication />
      <Realted />
    </div>
  );
}

export default Products;
