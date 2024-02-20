import React from "react";
import Banner from "../../images/login/banner.svg";
import Logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import "../index.css";

function Left() {
  return (
    <div className="relative w-[55%]">
      <Link to="/">
        <img
          className="absolute w-[12%] top-7 left-7 cursor-pointer"
          src={Logo}
          alt=""
        />
      </Link>
      <div className="w-[100%] h-full bg-gradient-to-r from-[#2144e1] to-[#213cb6] flex justify-center items-center">
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
    </div>
  );
}

export default Left;
