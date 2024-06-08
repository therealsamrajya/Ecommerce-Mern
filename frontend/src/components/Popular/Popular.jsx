import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] h-[90vh] font-poppins max-sm:mb-[2rem]">
      <h1 className="text-[#171717] text-3xl font-semibold">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-[6px] rounded-xl bg-[#252525]" />

      <div className="mt-[50px] flex gap-[30px] max-sm:grid max-sm:grid-cols-2 max-sm:gap-[50px] max-sm:mt-[10px]">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;
