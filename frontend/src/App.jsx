import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Cart, LoginSignup, Product, Shop, ShopCategory } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          <Route path="/mens" element={<ShopCategory category="men" />} />{" "}
          <Route path="/womens" element={<ShopCategory category="women" />} />{" "}
          <Route path="/kids" element={<ShopCategory category="kid" />} />{" "}
          <Route path="/product" element={<Product />} />{" "}
          <Route path=":productId" element={<Product />} />{" "}
          <Route path="/cart" element={<Cart />} />{" "}
          <Route path="/login" element={<LoginSignup />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
