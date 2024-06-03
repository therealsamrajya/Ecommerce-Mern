import React from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around p-[16px] shadow-xl">
      <div className="flex items-center gap-[10px]">
        <img src={logo} alt="shopper" />
        <p className="text-[#171717] text-2xl font-semibold ">SHOPPER</p>
      </div>
      <ul className="flex items-center  text-[#703737] text-xl font-semibold    ">
        <div className="cursor-pointer justify-center gap-[4rem] flex flex-row  items-center font-poppins p-3">
          <li className=" hover:text-red-600">
            <Link to="/">Shop</Link>
          </li>
          <li className=" hover:text-red-600">
            <Link to="/mens">Men</Link>
          </li>
          <li className=" hover:text-red-600">
            <Link to="/womens"></Link>
          </li>
          <li className=" hover:text-red-600 ml-[-2rem]">
            <Link to="/kids">Kids</Link>
          </li>
        </div>
      </ul>
      <div className="flex flex-row gap-5">
        <Button
          className="w-[157px] h-[58px] border border-[#7a7a7a] text-xl font-semibold bg-white  text-center p-3 hover:bg-[#f3f3f3] rounded-lg"
          value="Login"
          to="/login"></Button>
        <Link to="/cart">
          {" "}
          <img className="w-[2rem] mt-3 h-[2rem]" src={cart_icon} alt="cart" />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center ml-[-30px] bg-red-500 text-white rounded-lg">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
