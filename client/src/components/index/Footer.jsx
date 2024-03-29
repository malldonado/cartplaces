import React from "react";
import Logo from "../../images/logo/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#2144e1] w-full mt-[50px] h-full pt-[4%]">
      <div className="flex w-full justify-center items-center h-full">
        <div className="items-center w-[30%] flex justify-center">
          <ul className="text-white">
            <Link to='/'>
              <img className="h-[36px] mb-8 cursor-pointer" src={Logo} alt="" />
            </Link>
            <li>000 Street street street, 13000-000</li>
            <li>São Paulo / SP</li>
            <li className="flex justify-start gap-3 mt-4">
              <span className="text-[26px] cursor-pointer" href="">
                <FaFacebookSquare />
              </span>
              <span className="text-[26px] cursor-pointer" href="">
                <RiInstagramFill />
              </span>
              <span className="text-[26px] cursor-pointer" href="">
                <FaSquareXTwitter />
              </span>
            </li>
          </ul>
        </div>
        <div className="items-center w-[30%] flex justify-center mt-[-30px]">
          <ul className="text-white flex flex-col">
            <li className="text-[22px] font-medium mb-6 mt-8">Quick Access</li>
            <Link to={'/wishlist'} className="mb-3 cursor-pointer">Wishlist</Link>
            <Link to={'/account'} className="mb-3 cursor-pointer">Account</Link>
            <li className="mb-3 cursor-pointer">Cart</li>
          </ul>
        </div>
        <div className="items-center w-[30%] flex justify-center mt-[-30px]">
          <ul className="text-white">
            <li className="text-[22px] font-medium mb-6 mt-8">Contact</li>
            <li className="mb-3">+00 00000-0000</li>
            <li className="mb-3">cartplaces@mail.com</li>
            <li>Phone: +1 12345678</li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center flex justify-center align-bottom mt-20 pb-8 font-light opacity-75">
        © Cartplaces all rights 2023 - Designed by malldonado.dev
      </p>
    </div>
  );
}

export default Footer;
