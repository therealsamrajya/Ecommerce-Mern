import React from "react";
import new_collection from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[10px] mb-[100px] font-poppins">
        <h1 className="text-[#171717]text-[50px] font-semibold text-3xl">
          NEW COLLECTIONS
        </h1>
        <hr className="w-[200px] h-[6px] rounded-xl bg-[#252525]" />

        <div className=" grid-cols-4 gap-[20px] grid mt-[50px] ">
          {new_collection.map((item, i) => {
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
    </div>
  );
};

export default NewCollections;
