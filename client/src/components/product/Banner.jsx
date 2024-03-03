import React from "react";
import { HiShoppingBag } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Map from "../../images/index/map.svg";

function Banner() {

  const [isColor, setColor] = React.useState(false);

  return (
    <div className="bg-gradient-to-r from-[#2144e1] to-[#0053db] w-full h-[100px] mb-10">
      <div className="flex max-w-[1200px] h-[100%] mx-auto justify-center items-center">
          <div className="text-[46px] font-bold text-white tracking-[.2px]">
            Gugeton
          </div>
      </div>
    </div>
  );
}

export default Banner;
