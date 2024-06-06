import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[350px] hover:scale-[1.05] hover:transition-[0.6s]">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p className="">{props.name}</p>
      <div className="flex gap-[20px]">
        <div className=" text-[#374151] text-xl font-semibold">
          ${props.new_price}
        </div>

        <div className="text-[#8c8c8c] text-xl font-semibold line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
