import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Map from "../../images/index/map.svg";

function Banner() {

  const [isColor, setColor] = React.useState(false);

  return (
    <div className="bg-gradient-to-r from-[#2144e1] to-blue-500 w-full h-[500px]">
      <div className="flex max-w-[1200px] h-[100%] mx-auto justify-center items-center">
        <div className="w-[65%]">
          <div className="text-[46px] font-bold text-white tracking-[.2px]">
            Search for the product or store?
          </div>
          <p className="text-xl text-white">
            With just a few clicks, find the product or store near you!
          </p>
          <div className="w-[90%] bg-white h-[150px] rounded-xl mt-5 block">
            <div className="flex items-center h-[50%] border-b-[1px] border-[#eee]">
              <div className="w-[100px] flex bg-[#c9ddff] h-[45px] justify-center items-center text-[#2144e1] font-bold text-sm rounded-md ml-4 cursor-pointer">
                <HiShoppingBag className="mr-1" />
                Products
              </div>
              <div className="w-[100px] flex h-[45px] justify-center items-center text-[#757575] font-bold text-sm rounded-md cursor-pointer focus:text-[#2144e1] focus:bg-[#c9ddff]">
                <RiMapPinLine className="mr-1" />
                Stores
              </div>
            </div>
            <div className="flex justify-start items-center h-[50%]">
              <input
                className="w-[80%] h-[45px] bg-[#f5f5f5] ml-4 flex px-4 outline-none rounded-md text-[#2144e1] font-medium placeholder:font-normal"
                type="text"
                placeholder="Search products..."
              />
              <button className="w-[15%] bg-[#2144e1] text-white flex justify-center items-center h-[45px] rounded-md ml-2 font-medium cursor-pointer">
                <IoSearch className="mr-1" />
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <img className="h-auto my-auto" src={Map} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
