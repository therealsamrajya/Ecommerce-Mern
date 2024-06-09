import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className=" mx-[100px] my-[170px] max-sm:mx-[10px] max-sm:my-[40px]">
      <div className="grid  grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] px-[20px] py-0 text-[#454545] text-xl font-semibold max-sm:gap-[45px] max-sm:px-[10px] max-sm:text-[16px] max-sm:hidden">
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
              <div className="grid  grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] px-[20px] py-0 text-[#454545] text-xl font-semibold  max-sm:px-[10px] max-sm:text-[16px] max-sm:grid-cols-[0.5fr_3fr_0.5fr] max-sm:gap-[10px]">
                <img
                  className=" py-[1rem] h-[7rem] max-sm:w-[5rem]"
                  src={e.image}
                  alt={e.name}
                />
                <p className="max-sm:text-xl">{e.name}</p>
                <p className="ml-[12px] max-sm:text-xl">${e.new_price}</p>
                <button className="w-[64px] h-[50px] border-[2px] border-[#ebebeb] bg-[#fff] max-sm:h-[40px] max-sm:w-[28px] ">
                  {cartItems[e.id]}
                </button>
                <p className="max-sm:text-xl">
                  ${e.new_price * cartItems[e.id]}
                </p>
                <img
                  className="w-[15px] mx-[0px]  ml-[12px] my-[40px] cursor-pointer"
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

      <div className=" flex mx-[100px] my-[30px] font-poppins max-sm:items-center max-sm:flex-col max-sm:gap-[3rem] ">
        <div className=" flex-1 flex flex-col max-sm:mr-[0px] mr-[200px] gap-[40px] max-sm:text-xl max-sm:w-full">
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

          <button className="w-[262px] h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] cursor-pointer font-semibold text-xl hover:bg-red-600">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="flex-1 text-xl font-semibold   ">
          <p className="text-[#555] max-sm:text-2xl">
            If you have a promo code, Enter it here
          </p>
          <div className="w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex">
            <input
              className=" border-none outline-none bg-transparent text-xl w-[330px] h-[50px]"
              type="text"
              placeholder="promocode"
            />
            <button className="w-[170px] h-[58px] text-xl bg-black text-white cursor-pointer hover:bg-gray-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
