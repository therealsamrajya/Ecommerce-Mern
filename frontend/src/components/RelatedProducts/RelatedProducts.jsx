import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className=" flex flex-col items-center gap-[10px] h-[90vh]">
      <h1 className=" text-[#171717] font-semibold text-[50px]">
        {" "}
        Related Products
      </h1>
      <hr className=" w-[200px] h-[6px] rounded-xl bg-[#252525]" />

      <div className=" flex gap-[30px] mt-[50px]">
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

export default RelatedProducts;
