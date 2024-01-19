import React from "react";
import LogoIndex from "../../images/logo/logo.svg";
import Profile from "../../images/profile/img.png";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
// import { MdOutlineSearch } from "react-icons/md";
// import { BsArrowDown } from "react-icons/bs";
// import { BsBoxArrowInRight } from "react-icons/bs";
// import { RiShoppingBag3Line } from "react-icons/ri";

function Navbar() {
  return (
    <div>
      <nav className="bg-white">
        <div className="h-16 flex mx-auto px-2 sm:px-6 lg:px-8 max-w-[1200px] flex-wrap justify-center items-center">
          <img className="h-[36px] my-auto" src={LogoIndex} />
          <p className="flex font-sans text-[18px] mx-[90px]">
            <FaMapMarkerAlt className="fill-[#2144e1] mr-[5px] text-sm mt-[5px]" />
            Current Location:{" "}
            <b className="pl-2">
              {" "}
              Av. Europa, 1626, Vila Santa Maria, Americana - SP
            </b>
          </p>
            <IoSearch className="fill-[#2144e1] text-[25px] mr-12" />
            {/* <input placeholder="Search..." className="mx-1 h-[25px] p-1 outline-none border border-[#2144e1]"/> */}
          <RiShoppingBag3Line className="fill-[#2144e1] text-[25px] mr-12"/>
          <img
            className="border-solid border-spacing-[2px] rounded-xl border-[#243c5a] w-[26px]"
            src={Profile}
            alt=""
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
