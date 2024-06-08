import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex justify-around p-[16px] shadow-xl max-md:p-[18px] relative">
      <div className="flex items-center gap-[10px] max-md:gap-[2px]">
        <img src={logo} alt="shopper" />
        <p className="text-[#171717] text-2xl max-md:text-xl font-semibold">
          SHOPPER
        </p>
      </div>
      <ul className="flex items-center text-[#703737] text-xl font-semibold hidden md:flex">
        <div className="cursor-pointer justify-center gap-[4rem] flex flex-row items-center font-poppins p-3">
          <li className="hover:text-red-600">
            <Link to="/">Shop</Link>
          </li>
          <li className="hover:text-red-600">
            <Link to="/mens">Men</Link>
          </li>
          <li className="hover:text-red-600">
            <Link to="/womens">Women</Link>
          </li>
          <li className="hover:text-red-600">
            <Link to="/kids">Kids</Link>
          </li>
        </div>
      </ul>
      <div className="flex flex-row gap-5 items-center">
        <Button
          className="w-[157px] h-[58px] border border-[#7a7a7a] text-xl font-semibold bg-white text-center p-3 hover:bg-[#f3f3f3] rounded-lg"
          value="Login"
          to="/login"></Button>
        <Link to="/cart">
          <img
            className="w-[2rem] mt-1 h-[2.5rem]"
            src={cart_icon}
            alt="cart"
          />
        </Link>
        <div className="w-[22px] h-[22px] flex justify-center items-center ml-[-25px] bg-red-500 text-white rounded-lg mb-5">
          {getTotalCartItems()}
        </div>
        <button className="md:hidden text-2xl" onClick={toggleDrawer}>
          {isDrawerOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
          <div className="fixed top-0 left-0 w-3/4 max-w-[300px] h-full bg-white shadow-md p-4 flex flex-col items-start">
            <button className="self-end mb-4 text-2xl" onClick={toggleDrawer}>
              <FaTimes />
            </button>
            <ul className="flex flex-col items-start text-[#703737] text-xl font-semibold gap-4">
              <li className="hover:text-red-600">
                <Link to="/" onClick={toggleDrawer}>
                  Shop
                </Link>
              </li>
              <li className="hover:text-red-600">
                <Link to="/mens" onClick={toggleDrawer}>
                  Men
                </Link>
              </li>
              <li className="hover:text-red-600">
                <Link to="/womens" onClick={toggleDrawer}>
                  Women
                </Link>
              </li>
              <li className="hover:text-red-600">
                <Link to="/kids" onClick={toggleDrawer}>
                  Kids
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
