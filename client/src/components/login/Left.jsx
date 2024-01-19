import React from "react";
import Banner from "../../images/login/banner.svg";
import "../index.css";

function Left() {
  return (
    <div className="w-[55%] h-full bg-gradient-to-r from-[#2144e1] to-[#213cb6] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={Banner} className="h-auto my-auto w-[75%]" alt="" />
        <h2 className="text-white font-bold text-[24px] nunito-font mt-10">
          Leave Reviews for all meals
        </h2>
        <p className="mt-2 text-white nunito-font text-[14px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}

export default Left;
