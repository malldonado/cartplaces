import React from "react";
import { BsHouse } from "react-icons/bs";
import Logo from "../../images/dashboard/logo.png";

function NavbarLeft() {
  return (
    <div className="p-6 h-full w-[20%]">
      <div className="max-w-[300px] bo h-full bg-white rounded-[5px] border-[1px] border-[#eee]">
        <div className="flex items-center">
          <img alt="" className="h-9" />
        </div>
        <div className="block md:block w-full">
          <img src={Logo} alt="" className="h-[40px] w-auto mx-auto mb-10" />
          <span
            href="#"
            class="bg-white flex justify-start px-4 items-center text-black w-[90%] mx-auto h-14 py-2 text-[20px] font-medium nunito-font my-3 hover:text-white hover:bg-black cursor-pointer rounded-[5px] hover:fill-white fill-black duration-300"
          >
            <BsHouse className="mr-3 text-[18px] mb-[2.5px]" />
            Dashboard
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarLeft;
