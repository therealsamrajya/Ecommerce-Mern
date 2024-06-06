import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kid_banner from "./components/assets/banner_kids.png";
import { Cart, LoginSignup, Product, Shop, ShopCategory } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />{" "}
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />{" "}
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />{" "}
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="/login" element={<LoginSignup />} />{" "}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
