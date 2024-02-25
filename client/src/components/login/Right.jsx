import React from "react";
import LogoIndex from "../../images/logo/logo.svg";
import Index from "../Index";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import "../index.css";

function Right() {
  return (
    <div className="w-[45%]">
      <Link to="/">
        <IoCloseSharp className="absolute text-[45px] top-5 right-5 text-[#2144e1] cursor-pointer" />
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link to="/">
          <img
            src={LogoIndex}
            className="h-[40px] mt-8 ml-8 cursor-pointer"
            alt=""
          />
        </Link>
        <div className="mt-10 w-[50%]">
          <h2 className="text-[26px] font-bold nunito-font">Login</h2>
          <p className="nunito-font text-[14px] mt-4 text-gray-500">
            Sign in with your data that you entered during your registration.
          </p>
          <form className="mt-6" action="">
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
            <button className="w-full h-[40px] bg-[#3870ff] mt-4 text-white nunito-font rounded-md flex justify-center items-center">
              <FaGoogle className="mr-2" />
              Sing in with Google
            </button>
            <p className="pt-4 nunito-font text-gray-500 text-[14px] font-normal">
              Don`t you have an account?{" "}
              <Link
                className="text-[#2144e1] text-[15px] font-bold"
                to="/register"
              >
                Sing up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Right;
