import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Image from '../../images/index/1.png'

function Categories() {
  return (
    <div className="max-w-[1200px] mx-auto mt-[70px]">
      <div className="flex w-full">
        <h2 className="font-bold text-[30px] w-[80%]">Main categories</h2>
        <div className="flex">
          <p className="flex items-center mr-4 text-[#2144e1] font-bold">View All<IoIosArrowForward className="text-[20px]"/></p>
          <button className="bg-[#2144e1] w-[50px] h-[50px] rounded-full mr-3">
            <IoIosArrowBack className="text-white text-[30px] m-auto" />
          </button>
          <button className="bg-[#2144e1] w-[50px] h-[50px] rounded-full">
            <IoIosArrowForward className="text-white text-[30px] m-auto" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-auto mt-10">
       <div className="">
        <img className="h-[150px]" src={Image} alt="" />
        <p className="text-center font-medium">Clothes</p>
       </div>
      </div>
    </div>
  );
}

export default Categories;
