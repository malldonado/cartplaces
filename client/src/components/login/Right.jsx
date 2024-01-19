import React from "react";
import LogoIndex from "../../images/logo/logo.svg";
import "../index.css";

function Right() {
  return (
    <div className="w-[45%] flex flex-col items-center justify-center h-screen">
      <img src={LogoIndex} className="h-[40px] mt-8 ml-8" alt="" />
      <div className="mt-10 w-[50%]">
        <h2 className="text-[26px] font-bold nunito-font">Login</h2>
        <p className="nunito-font text-[14px] mt-4 text-gray-500">
          Sign in with your data that you entered during your registration.
        </p>
        <form className="mt-10" action="">
          <label
            className="nunito-font text-[14px] mt-4 text-gray-500"
            htmlFor="Email"
          >
            Email
          </label>
          <input
            className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 mb-4 placeholder:font-normal"
            type="email"
            placeholder="E-mail"
          />
          <label
            className="nunito-font text-[14px] mt-4 text-gray-500"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            className="w-full block outline-none border-[1px] border-gray-300 rounded-md	h-[40px] p-2 text-[#2144e1] font-bold nunito-font mt-1 placeholder:font-normal"
            type="password"
            placeholder="Password"
          />
          <div className="flex mt-6">
            <input type="checkbox" />
            <p className="ml-2 nunito-font text-gray-500 text-[14px] font-medium">
              Keep me logged in
            </p>
          </div>
          <button className="w-full h-[40px] bg-[#2144e1] mt-4 text-white nunito-font rounded-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Right;
