import React, { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { MdSpaceDashboard, MdSell, MdKeyboardArrowRight, MdOutlineAttachMoney } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { IoReturnDownBack } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../index.css";

function NavbarLeft() {
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation();
  const meRoute = location.pathname.split('-')[0]  === "/seller";

  const items = meRoute
    ? [
        {
          id: 1,
          label: "Dashboard",
          route: "/seller",
          emogi: <MdSpaceDashboard className="w-6 h-6 mr-2" />,
        },
        {
          id: 2,
          label: "Products",
          route: "/seller-products",
          emogi: <BsPersonFill className="w-6 h-6 mr-2" />,
        },
        {
          id: 3,
          label: "Orders",
          route: "/seller-orders",
          emogi: <MdSell className="w-6 h-6 mr-2" />,
        },
        {
          id: 4,
          label: "Finance",
          route: "/seller-finance",
          emogi: <MdOutlineAttachMoney className="w-6 h-6 mr-2" />,
        },
        {
          id: 5,
          label: "Discount",
          route: "/seller-discount",
          emogi: <TbDiscount2 className="w-6 h-6 mr-2" />,
        },
        {
          id: 5,
          label: "Settings",
          route: "/seller-settings",
          emogi: <IoIosSettings className="w-6 h-6 mr-2" />,
        },
        {
          id: 5,
          label: "Account",
          route: "/account",
          emogi: <IoReturnDownBack className="w-6 h-6 mr-2" />,
        },
        {
          id: 5,
          label: "Home",
          route: "/",
          emogi: <IoReturnDownBack className="w-6 h-6 mr-2" />,
        },
      ]
    : [
        {
          id: 1,
          label: "Dashboard",
          route: "/account",
          emogi: <MdSpaceDashboard className="w-6 h-6 mr-2" />,
        },
        {
          id: 2,
          label: "Profile",
          route: "/profile",
          emogi: <BsPersonFill className="w-6 h-6 mr-2" />,
        },
        {
          id: 3,
          label: "Seller",
          route: "/seller",
          emogi: <MdSell className="w-6 h-6 mr-2" />,
        },
        {
          id: 4,
          label: "Settings",
          route: "/settings",
          emogi: <IoIosSettings className="w-6 h-6 mr-2" />,
        },
        {
          id: 5,
          label: "Home",
          route: "/",
          emogi: <IoReturnDownBack className="w-6 h-6 mr-2" />,
        },
      ];

  const bread = [
    {
      id: 1,
      label: "Home",
      route: "/",
      emogi: <MdKeyboardArrowRight className="text-[20px] fill-black" />,
    },
    {
      id: 2,
      label: "Account",
      route: "/account",
      emogi: <MdKeyboardArrowRight className="text-[20px] fill-black" />,
    },
    ...(meRoute
      ? [
          {
            id: 3,
            label: "Seller",
            route: "/seller",
          },
        ]
      : []),
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="py-6 mr-4 h-full w-[250px] mt-2">
      {/* BREADCRUMB */}
      <div
        className="flex w-[250px] py-3 text-gray-700 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        {bread.map((item) => (
          <NavLink
            to={item.route}
            key={item.id}
            className={
              location.pathname === item.route
                ? "flex justify-center items-center font-bold text-[#1d4ed8]"
                : "flex justify-center items-center font-bold"
            }
            onClick={() => handleItemClick(item)}
          >
            {item.label}
            {item.emogi}
          </NavLink>
        ))}
      </div>

      {/* NAVBARLEFT */}
      <div className="h-[80vh] rounded-[10px] border-[1px] bg-white panel-cards">
        <div className="md:flex">
          <ul className="flex-column space-y space-y-4 text-[16px] font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full mx-4 mt-5">
            <li>
              {items.map((item) => (
                <NavLink
                  to={item.route}
                  key={item.id}
                  activeClassName="active"
                  className={
                    location.pathname === item.route
                      ? "inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600 mb-3"
                      : "inline-flex items-center mb-3 px-4 py-3 rounded-lg hover:text-white bg-gray-50 hover:bg-blue-700 w-full dark:bg-gray-800 dark:hover:bg-white dark:hover:text-white"
                  }
                  onClick={() => handleItemClick(item)}
                >
                  {item.emogi}
                  {item.label}
                </NavLink>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarLeft;
