import React from "react";
import add_product_icon from "../../assets/Product_Cart.svg";
import list_product_icon from "../../assets/Product_list_icon.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-[30px] gap-[20px] lg:w-[100%] max-w-[250px] h-[125vh] bg-[#E0E0E0] max-sm:flex-row max-sm:w-[100%] max-sm:justify-center max-sm:max-w-none max-sm:h-[20vh] ">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center mx-[20px] my-[20px] px-[5px] py-[10px] rounded-md bg-[#f6f6f6] gap-[20px] cursor-pointer max-sm:px-[4px] max-sm:py-[5px] max-sm:mx-[5px] text-[14px] max-sm:gap-[10px] font-semibold ">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-center mx-[20px] my-[20px] px-[5px] py-[10px] rounded-md bg-[#f6f6f6] gap-[20px] cursor-pointer max-sm:px-[4px] max-sm:py-[5px] max-sm:mx-[5px] text-[14px] max-sm:gap-[10px] font-semibold ">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
