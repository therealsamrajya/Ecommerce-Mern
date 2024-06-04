import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-purple-300 via-green-100/30 to-transparent flexs  ">
      <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-3">
        <h2 className="text-[#090909] text-3xl font-semibold mt-[5rem]">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[#171717] text-[100px] font-semibold">New</p>
            <img className="w-[105px]" src={hand_icon} alt="" />
          </div>
          <div className="flex flex-col gap-[12vh] text-[100px] mt-[2rem] font-semibold ">
            <p>Collection</p>
            <p>For Everyone</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px]  bg-[#ff4141] text-white text-2xl font-semibold mt-[4rem]">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="flex items-end flex-col mt-[-31rem]">
        <img className="h-[80vh] w-[30vw] " src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
