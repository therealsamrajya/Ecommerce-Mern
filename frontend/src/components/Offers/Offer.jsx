import React from "react";
import Button from "../Button/Button";
import exclusive_image from "../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="bg-gradient-to-b from-purple-300 via-green-100/30 to-transparent h-[60vh] w-[60vw] px-[140px] ml-[20rem] mb-[10rem]  flex flex-row gap-[12rem]">
      <div className=" font-poppins font-semibold text-[40px] mt-[25px]">
        <h1>Exclusive</h1>
        <h1 className=" whitespace-nowrap">Offers For You</h1>
        <p className=" whitespace-nowrap uppercase text-[20px]">
          only on best seller products
        </p>
        <Button
          value="Check Now"
          className="w-[15rem] h-[3rem] text-3xl font-normal text-white rounded-2xl whitespace-nowrap bg-[#ff4141] hover:bg-red-700 "></Button>
      </div>
      <img src={exclusive_image} className="h-[60vh]" alt="" />
    </div>
  );
};

export default Offer;
