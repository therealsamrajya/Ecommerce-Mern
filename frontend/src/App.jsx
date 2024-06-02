import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>{/* <Route path="/" element = {</>} */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
