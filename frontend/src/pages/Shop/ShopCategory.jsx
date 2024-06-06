import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import dropdown_icon from "../../components/assets/dropdown_icon.png";
import { Item } from "../../components";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className=" font-poppins">
      <img
        className="block my-[30px] mx-auto w-[82%]"
        src={props.banner}
        alt=""
      />

      <div className="flex my-[0px] mx-[170px] justify-between items-center ">
        <p className=" font-semibold">
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className="py-[10px] px-[30px] rounded-[40px] border-[1px] border-[#888] flex items-center gap-2">
          Sort By{" "}
          <img className="  w-[10px] h-[10px]" src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className=" my-[20px] mx-[170px] grid-cols-4 grid gap-[5rem]">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="flex justify-center items-center ml-[47%] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-semibold mt-[4rem] ">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
