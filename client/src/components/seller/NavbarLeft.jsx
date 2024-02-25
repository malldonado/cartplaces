import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdSpaceDashboard, MdSell, MdKeyboardArrowRight } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import "../index.css";

function NavbarLeft() {
  return (
    <div className="p-6 h-full w-[20%] mt-2">
      {/* BREADCRUMB */}
      <div
        className="flex px-5 py-3 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <MdKeyboardArrowRight />
              Home
            </Link>
          </li>
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <MdKeyboardArrowRight />
              Seller
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <MdKeyboardArrowRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Account
              </span>
            </div>
          </li>
        </ol>
      </div>

      {/* NAVBARLEFT */}
      <div className="max-w-[300px] h-[80vh] rounded-[10px] border-[1px] bg-white panel-cards">
        <div className="md:flex">
          <ul className="flex-column space-y space-y-4 text-[16px] font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full mx-4 mt-5">
            <li>
              <Link
                to={"/account"}
                className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600"
                aria-current="page"
              >
                <MdSpaceDashboard className="w-6 h-6 mr-2" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <BsPersonFill className="w-6 h-6 mr-2" />
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/seller"}
                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <MdSell className="w-6 h-6 mr-2" />
                Orders
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <IoIosSettings className="w-6 h-6 mr-2" />
                Finance
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <IoIosSettings className="w-6 h-6 mr-2" />
                Discount
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <IoIosSettings className="w-6 h-6 mr-2" />
                Settings
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <IoReturnDownBack className="w-6 h-6 mr-2" />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarLeft;
