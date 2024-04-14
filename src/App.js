import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import LoginSignup from "./Pages/LoginSignup";
import Categerious from "./Pages/Categerious";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Fotter from "./Components/Footer/Fotter";
import men_banner from "./Components/Assests/banner_mens.png";
import kid_banner from "./Components/Assests/banner_kids.png";
import women_banner from "./Components/Assests/banner_women.png";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route
          path="/mens"
          element={<Categerious banner={men_banner} category="men" />}
        ></Route>
        <Route
          path="/womens"
          element={<Categerious banner={women_banner} category="women" />}
        ></Route>
        <Route
          path="/kids"
          element={<Categerious banner={kid_banner} category="kid" />}
        ></Route>
        <Route path="/product" element={<Products />}>
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="/login" element={<LoginSignup />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
  );
}

export default App;
