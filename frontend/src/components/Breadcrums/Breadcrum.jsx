import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) {
    return null; // or return a fallback UI
  }

  return (
    <div className="flex flex-row items-center gap-[8px] text-[#5e5e5e] text-xl font-semibold mx-[170px] my-[60px] uppercase max-sm:mx-[12px] max-sm:text-[12.5px]">
      HOME <img className="max-sm:w-[5px]" src={arrow_icon} alt="" /> SHOP{" "}
      <img className="max-sm:w-[5px]" src={arrow_icon} alt="" />
      {product.category}{" "}
      <img className="max-sm:w-[5px]" src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
