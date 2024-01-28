import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from "../../images/index/Image.png";

function Products() {
  return (
    <div className="max-w-[1200px] mx-auto mt-[70px]">
      <div className="flex w-full">
        <h2 className="font-bold text-[30px] w-[80%]">
          Products nearby on sale
        </h2>
        <div className="flex">
          <p className="flex items-center mr-4 text-[#2144e1] font-bold">
            View All
            <IoIosArrowForward className="text-[20px]" />
          </p>
          <button className="bg-[#2144e1] w-[50px] h-[50px] rounded-full mr-3">
            <IoIosArrowBack className="text-white text-[30px] m-auto" />
          </button>
          <button className="bg-[#2144e1] w-[50px] h-[50px] rounded-full">
            <IoIosArrowForward className="text-white text-[30px] m-auto" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-auto mt-10">
        <div className="cursor-pointer relative">
          <div className="bg-[#2144e1] w-[110px] text-center font-bold p-0 text-white rounded-tr-[15px] rounded-bl-[20px] flex items-center h-[55px] leading-4 absolute bottom-[70px]">
            <div className="w-[60%] text-[46px] text-end tracking-tighter">
              15
            </div>
            <div className="w-[30%]">
              <div className="text-[22px] mt-2">%</div>
              <div className="text-[13px] mt-1">Off</div>
            </div>
          </div>
          <img className="h-[250px] w-[250px]" src={Image} alt="" />
          <p className="text-left font-bold mb-2">Nike Shoes</p>
          <div className="bg-[#2144e133] h-[30px] flex items-center justify-center rounded-md">
            <p className="text-[#2144e1] font-bold z-1000 opacity-100">
              6 Days Remaining
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
