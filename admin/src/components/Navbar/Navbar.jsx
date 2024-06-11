import React from "react";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[30px] py-[20px] shadow-custom-shadow mb-[1px] bg-white ">
      <img className="w-[200px]" src={navlogo} alt="" />
      <img className="w-[75px]" src={navProfile} alt="" />
    </div>
  );
};

export default Navbar;
