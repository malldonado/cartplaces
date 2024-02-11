import React from "react";
import { FaHouse } from "react-icons/fa6";
import Logo from "../../images/logo/logo.svg";

function Navbar() {
  return (
    <div className="p-6 h-full w-[20%]">
      <div className="max-w-[300px] bo h-full bg-white rounded-[15px] border-[1px] border-[#eee]">
        <div className="flex items-center">
          <img alt="" className="h-9" />
        </div>
        <div className="block md:block w-full">
          <img src={Logo} alt="" className="h-[40px] mx-auto mb-10" />
          <span
            href="#"
            class="bg-white flex justify-start px-4 items-center text-black w-[90%] mx-auto h-14 py-2 text-[16px] font-bold nunito-font my-3 hover:text-white hover:bg-black cursor-pointer rounded-[10px] hover:fill-white fill-black duration-300"
          >
            <FaHouse className="mr-2" />
            Dashboard
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
