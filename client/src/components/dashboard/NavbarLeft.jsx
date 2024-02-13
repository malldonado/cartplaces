import React from "react";
import { BsHouse } from "react-icons/bs";
import Logo from "../../images/dashboard/logo.png";

function NavbarLeft() {
  return (
    <div className="p-6 h-full w-[20%]">
      <div className="max-w-[300px] h-full bg-white rounded-[3px] border-[1px] border-[#eee]">
        <div className="block md:block w-full">
          <span className="flex justify-center items-center text-[20px] font-medium mt-6 border-[1px] border-transparent border-b-[#eee] pb-6 mx-2"><img src={Logo} alt="" className="h-[30px] text-[30px] mr-1" /> CARTPLACES</span>
          <span
            href="#"
            class="bg-white flex justify-start px-4 items-center text-[black] w-[90%] mx-auto h-14 py-2 text-[16px] font-medium sf-ui-text my-3 hover:text-white hover:bg-black cursor-pointer rounded-[5px] hover:fill-white fill-black duration-300 mt-4"
          >
            <BsHouse className="mr-3 text-[18px] mb-[1px]" />
            DASHBOARD
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarLeft;
