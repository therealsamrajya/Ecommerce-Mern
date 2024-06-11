import React from "react";
import { Navbar } from "./components";
import { Admin } from "./pages";
const App = () => {
  return (
    <div className="bg-[#f5f5f5] font-poppins">
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
