import React from "react";
import { FaHouse } from "react-icons/fa6";
import '../index.css';

function NavbarLeft() {
  return (
    <div className="p-6 h-full w-[20%] mt-2">
      <div className="max-w-[300px] h-full rounded-[10px] border-[1px] border-transparent bg-gradient-to-t from-[#2849dd] to-[#0059eb]">
        <div className="block md:block w-full">
          <span
            href="#"
            className="bg-transparent flex justify-start px-4 items-center text-[#fff] w-[90%] mx-auto h-[54px] py-2 text-[19px] font-medium sf-ui-text my-3 hover:text-[#0059eb] hover:bg-[#fff] cursor-pointer rounded-[10px] hover:fill-[#0059eb] fill-[#0059eb] duration-600 mt-4"
          >
            <FaHouse className="mr-3 text-[20px] mb-[-1px]" />
            DASHBOARD
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarLeft;
