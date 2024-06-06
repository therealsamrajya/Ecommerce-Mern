import React from "react";
import { Button } from "../../components";

const LoginSignup = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#fce3fe] pt-[100px] font-poppins">
      <div className="w-[595px] h-[600px] bg-white m-auto   py-[30px] px-[50px]">
        <h1 className=" my-[20px] mx-[0px] ">Sign Up</h1>
        <div className=" flex flex-col gap-[30px] mt-[20px]">
          <input
            className=" h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className=" h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            type="email"
            placeholder="Email Address"
          />
          <input
            className=" h-[72px] w-[100%] pl-[20px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]"
            type="password"
            placeholder="Password"
          />
        </div>
        <Button
          value="Continue"
          className=" w-[495px] h-[50px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px] font-semibold cursor-pointer"></Button>
        <p className=" mt-[20px] text-[#5c5c5c] text-[18px] font-semibold">
          Already have an account ?{" "}
          <span className="text-[#ff4141] font-semibold"> Login Here</span>
        </p>

        <div className=" flex items-center mt-[25px] gap-[20px]  text-[#5c5c5c]  text-[18px] font-semibold whitespace-nowrap">
          <input type="checkbox" name="" id="" />
          <p className="">
            By continuing, I agree to terms of use and privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
