import React from "react";
import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-300 via-green-100/30 to-transparent h-[60vh] w-[86vw] px-[140px] ml-[7rem] mb-[10rem] max-sm:ml-0 max-sm:w-full max-sm:px-[70px] max-sm:h-[50vh]">
      <h1
        className="text-[#454545] font-semibold text-[55px]
       max-sm:text-[25px]">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] font-semibold text-[20px] mt-[2rem]">
        Subscribe to our newsletter and stayupdated
      </p>
      <div className="mt-[2rem] max-sm:ml-[2rem] max-sm:w-fit max-sm:flex">
        <input
          className="w-[300px] ml-[30px] border-none outline-none text-[#616161] text-xl max-sm:w-fit"
          type="email"
          placeholder="Your Email id"
        />
        <Button
          className="w-[210px] h-[70px] rounded-[80px] bg-black text-white text-xl cursor-pointer max-sm:mt-3 max-sm:w-[150px] max-sm:h-[50px] "
          value="Subscribe"></Button>
      </div>
    </div>
  );
};

export default NewsLetter;
