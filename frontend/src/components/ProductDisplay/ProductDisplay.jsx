import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex my-0 mx-[170px] font-poppins">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[16px] h-[163px] ">
          <img
            className="  transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={product.image}
            alt=""
          />
          <img
            className="  transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={product.image}
            alt=""
          />
          <img
            className="  transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={product.image}
            alt=""
          />
          <img
            className="  transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={product.image}
            alt=""
          />
        </div>

        <div>
          <img
            className="w-[65rem] h-[720px] transition-transform duration-300 ease-in-out transform hover:scale-105 "
            src={product.image}
            alt=""
          />
        </div>
      </div>

      <div className=" mx-[5rem] my-[0px] flex flex-col">
        <h1 className=" text-[#3d3d3d] text-[40px] font-semibold">
          {product.name}
        </h1>
        <div className="flex items-center mt-[13px] gap-[5px] text-[#1c1c1c] text-xl ">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>

        <div className="flex flex-col  my-[0px] font-semibold gap-[30px] text-2xl">
          <div className=" flex flex-row gap-[2rem] mt-[2rem]">
            <div className=" text-[#818181] line-through">
              ${product.old_price}
            </div>

            <div className="text-[#ff4141]">${product.new_price}</div>
          </div>

          <div className="font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div>
            <h1 className="mt-[30px] text-[#656565] text-xl font-semibold">
              Select Size
            </h1>
            <div className="flex mt-[30px] my-[0px] gap-[20px] items-center ">
              <div className="px-[18px] py-[24px] border-[1px] border-[ebebeb] rounded-sm cursor-pointer">
                S
              </div>
              <div className="px-[18px] py-[24px] border-[1px] border-[ebebeb] rounded-sm cursor-pointer">
                M
              </div>
              <div className="px-[18px] py-[24px] border-[1px] border-[ebebeb] rounded-sm cursor-pointer">
                L
              </div>
              <div className="px-[18px] py-[24px] border-[1px] border-[ebebeb] rounded-sm cursor-pointer">
                XL
              </div>
              <div className="px-[18px] py-[24px] border-[1px] border-[ebebeb] rounded-sm cursor-pointer">
                XXL
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
            className="px-[20px] py-[20px] w-[200px] text-xl font- text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer hover:bg-red-700  ">
            Add to Cart
          </button>
          <div className=" mt-[-2rem]">
            <p className="mt-[10px] font-normal">
              <span className=" font-normal">Category :</span> Women, T-Shirt,
              Crop Top
            </p>
            <p className="font-normal">
              <span>Tags :</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
