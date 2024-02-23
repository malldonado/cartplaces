import React from "react";
import { BsHouseFill } from "react-icons/bs";
import '../index.css';

function NavbarLeft() {
  return (
    <div className="p-6 h-full w-[20%] mt-2">
      <div className="max-w-[300px] h-full rounded-[10px] border-[1px] bg-white panel-cards">
        <div className="block md:block w-full">
          <span
            href="#"
            className="bg-transparent flex justify-start px-5 items-center text-[#000] w-[90%] mx-auto h-[54px] py-2 text-[19px] font-medium sf-ui-text my-3 hover:text-[#fff] hover:bg-[#0059eb] cursor-pointer rounded-[10px] hover:fill-[#0059eb] fill-[#0059eb] ease-in duration-200 mt-4"
          >
            <BsHouseFill className="mr-2 text-[20px] mb-[-1px]" />
            Dashboard
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarLeft;
