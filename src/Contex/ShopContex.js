import { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assests/all_product";

export const ShopContex = createContext(null);
const dfeaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContexProvider = (props) => {
  const [all_product, setall_product] = useState([]);
  const [cartItem, setcartItem] = useState(dfeaultCart());

  useEffect(() => {
    fetch("https://e-backend-jkn8.onrender.com/getallproducts")
      .then((response) => response.json())
      .then((data) => setall_product(data));

    if (localStorage.getItem("Auth-token")) {
      fetch("https://e-backend-jkn8.onrender.com/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setcartItem(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("Auth-token")) {
      fetch("https://e-backend-jkn8.onrender.com/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ itemId: itemId }),
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  // https://e-backend-jkn8.onrender.com/
  // https://e-backend-jkn8.onrender.com
  // https://e-backend-jkn8.onrender.com
  const removeFromcart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("Auth-token")) {
      fetch("https://e-backend-jkn8.onrender.com/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Auth-token": `${localStorage.getItem("Auth-token")}`,
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ itemId: itemId }),
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmmount = () => {
    let toatlAmmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        toatlAmmount += itemInfo.new_price * cartItem[item];
      }
    }
    return toatlAmmount;
  };

  const getTotalcartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItem,
    addToCart,
    removeFromcart,
    getTotalCartAmmount,
    getTotalcartItems,
  };

  return (
    <ShopContex.Provider value={contextValue}>
      {props.children}
    </ShopContex.Provider>
  );
};
export default ShopContexProvider;
