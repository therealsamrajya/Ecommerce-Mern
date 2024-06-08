import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-purple-300 via-green-100/30 to-transparent flex max-sm:h-[60vh]  ">
      <div className="flex-1 flex flex-col justify-center gap-[20px] pl-[180px] leading-3 max-sm:ml-[-124px]">
        <h2 className="text-[#090909] text-3xl font-semibold  max-sm:text-lg">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-[20px]">
            <p className="text-[#171717] text-[100px] max-sm:text-[50px] font-semibold">
              New
            </p>
            <img className="w-[105px] max-sm:w-[55px]" src={hand_icon} alt="" />
          </div>
          <div className="flex flex-col gap-[12vh] text-[100px] mt-[2rem] font-semibold max-sm:text-[50px] max-sm:gap-[8vh] ">
            <p>Collection</p>
            <p>For Everyone</p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-[15px] max-sm:w-[210px] max-sm:text-lg max-sm:h-[45px] w-[310px] h-[70px] rounded-[75px]  bg-[#ff4141] text-white text-2xl font-semibold mt-[2rem] lg:mt-[3rem]">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="flex items-end flex-col ">
        <img
          className="h-[80vh] w-[30vw] max-sm:h-[40vh] max-sm:w-[35vw]"
          src={hero_image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
