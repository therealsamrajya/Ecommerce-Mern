import React from "react";
import { AddProduct, ListProduct, Sidebar } from "../../components";
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div className=" flex max-sm: flex-col">
      <Sidebar />
      <Routes>
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
