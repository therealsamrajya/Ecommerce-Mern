import React from "react";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col items-center font-poppins mt-[2rem]">
      <div className="flex flex-row items-center justify-center">
        <img className="w-[20vh] max-sm:w-[10vh]" src={footer_logo} alt="" />
        <p className="text-[#383838] text-[46px] font-semibold mt-[3rem] max-sm:mt-5 max-sm:text-[26px]">
          SHOPPER
        </p>
      </div>
      <ul className="flex flex-row color-[#252525] text-xl gap-[50px] cursor-pointer mt-[2rem] max-sm:text-sm">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex flex-row bg-[#fbfbfb] pb-[6px]  gap-[40px] mt-[2rem]">
        <img src={instagram_icon} alt="" />
        <img src={whatsapp_icon} alt="" />
        <img src={pintester_icon} alt="" />
      </div>

      <div className="mt-[2rem] mb-[3rem]">
        <hr className="w-[100%] border-none rounded-xl h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @2023 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
