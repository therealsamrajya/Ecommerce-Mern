import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className=" mx-[100px] my-[170px]">
      <div className="grid  grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] px-[20px] py-0 text-[#454545] text-xl font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[e2e2e2] border-0" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid  grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] px-[20px] py-0 text-[#454545] text-xl font-semibold">
                <img
                  className=" py-[1rem] h-[7rem]"
                  src={e.image}
                  alt={e.name}
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-[2px] border-[#ebebeb] bg-[#fff]">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="w-[15px] mx-[0px] my-[40px] cursor-pointer"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }

        return null;
      })}

      <div className=" flex mx-[100px] my-[30px] font-poppins">
        <div className=" flex-1 flex flex-col mr-[200px] gap-[40px]">
          <h1 className=" text-2xl font-semibold">Cart Totals</h1>
          <div>
            <div className="flex justify-between px-[15x] py-[10px]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between px-[15x] py-[10px]">
              <p>Shiping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="flex justify-between px-[15x] py-[10px]">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] cursor-pointer font-semibold text-xl">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 text-xl font-semibold">
          <p className="text-[#555]">If you have a promo code,enter it here</p>
          <div className="w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex">
            <input
              className=" border-none outline-none bg-transparent text-xl w-[330px] h-[50px]"
              type="text"
              placeholder="promocode"
            />
            <button className="w-[170px] h-[58px] text-xl bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
