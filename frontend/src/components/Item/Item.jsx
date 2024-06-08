import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[350px] hover:scale-[1.05] hover:transition-[0.6s] max-sm:w-[260px] ">
      <Link to={`/product/${props.id}`}>
        <img
          className="max-sm:w-[260px] "
          onClick={window.scrollTo(0, 0)}
          src={props.image}
          alt=""
        />
      </Link>
      <p className="max-sm:text-sm">{props.name}</p>
      <div className="flex gap-[20px]">
        <div className=" text-[#374151] text-xl font-semibold max-sm:text-sm">
          ${props.new_price}
        </div>

        <div className="text-[#8c8c8c] text-xl font-semibold line-through max-sm:text-sm">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
