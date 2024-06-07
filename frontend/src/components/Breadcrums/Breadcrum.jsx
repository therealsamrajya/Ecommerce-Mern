import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="flex flex-row items-center gap-[8px] text-[#5e5e5e] text-xl font-semibold mx-[170px] my-[60px] uppercase">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrum;
