import React from "react";

function Navbar() {
  return (
    <div className="p-6 h-full">
      <div className="max-w-[300px] bo h-full bg-gray-800 rounded-[15px]">
        <div className="flex items-center">
          <img alt="" className="h-9" />
        </div>
        <div className="block md:block w-full">
          <span
            href="#"
            class="bg-gray-900 flex justify-start px-4 items-center text-white w-full h-14 py-2 text-[16px] font-bold nunito-font my-1 hover:text-black hover:bg-white cursor-pointer"
          >
            Dashboard
          </span>
          <span
            href="#"
            class="bg-gray-900 flex justify-start px-4 items-center text-white w-full h-14 py-2 text-[16px] font-bold nunito-font uppercase my-1 hover:text-black hover:bg-white cursor-pointer"
          >
            Dashboard
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
