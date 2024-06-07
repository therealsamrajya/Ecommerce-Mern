import React from "react";

const DescriptionBox = () => {
  return (
    <div className=" mx-[120px] my-[170px] font-poppins">
      <div className="flex flex-col ">
        <div className=" flex flex-row">
          <div className="flex items-center justify-center text-xl font-semibold w-[171px] h-[70px] border-[1px] border-[#d0d0d0]">
            Description
          </div>

          <div className=" bg-[#fbfbfb] text-[#555] flex items-center justify-center text-xl font-semibold w-[171px] h-[70px] border-[1px]">
            Reviews (122)
          </div>
        </div>

        <div className=" flex flex-col gap-[25px] border-[1px] p-[48px] pb-[70px] border-[#d0d0d0]">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
