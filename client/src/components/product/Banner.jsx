import React from "react";
import { Link } from 'react-router-dom';

function Banner() {

  return (
    <div className="bg-gradient-to-r from-[#2144e1] to-[#0053db] w-full h-[100px] mb-10">
      <div className="flex max-w-[1200px] h-[100%] mx-auto justify-center items-center">
          <Link to={'/store'} className="text-[36px] font-bold text-white tracking-[.2px] cursor-pointer">
            CASAS BAHIA
          </Link>
      </div>
    </div>
  );
}

export default Banner;
