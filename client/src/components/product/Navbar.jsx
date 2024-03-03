import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaMapMarkerAlt, FaGoogle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import {
  Avatar,
  Popover,
  Menu,
  Position,
  TimelineLineChartIcon,
  HeartIcon,
  LogOutIcon,
  Pane,
  Dialog,
  SideSheet,
  Paragraph,
  TextInput,
} from "evergreen-ui";
import LogoIndex from "../../images/logo/logo.svg";

function Navbar() {
  const [isSearch, setSearch] = React.useState(false);
  const [isMap, setMap] = React.useState(false);
  const [isLogin, setLogin] = React.useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="h-16 flex mx-auto px-2 sm:px-6 lg:px-8 max-w-[1200px] flex-wrap justify-center items-center">
          <Link to="/">
            <img className="h-[36px] my-auto cursor-pointer" src={LogoIndex} />
          </Link>
          <Pane>
            <Dialog
              isShown={isMap}
              text
              title="Onde você quer receber seu pedido?"
              onCloseComplete={() => setMap(false)}
              hasFooter={false}
            >
              <div className="flex relative">
                <input
                  className="h-[45px] w-full bg-[#f5f5f5] rounded-[5px] outline-none border border-[#f2f2f2] px-2 text-[#2144e1] font-medium placeholder:font-normal"
                  type="text"
                  placeholder="Buscar endereço e número"
                />
                <LiaSearchSolid className="absolute right-2 bottom-0 top-0 my-auto text-[25px] cursor-pointer fill-[#2144e1]" />
              </div>
              <button className="flex h-[45px] w-full bg-[#2144e1] text-white justify-center items-center mt-5 rounded-[5px] text-[16px] font-medium mb-6"><GrLocation className="text-[15px] mr-1" />Utilizar minha localização</button>
            </Dialog>
            <p
              onClick={() => setMap(true)}
              className="flex font-sans text-[18px] mx-[90px] cursor-pointer"
            >
              <FaMapMarkerAlt className="fill-[#2144e1] mr-[5px] text-sm mt-[5px]" />
              Current Location:{" "}
              <b className="pl-2">
                {" "}
                Av. Europa, 1626, Vila Santa Maria, Americana - SP
              </b>
            </p>
          </Pane>
          <Pane>
            <Dialog
              isShown={isSearch}
              onCloseComplete={() => setSearch(false)}
              hasFooter={false}
              hasHeader={false}
            >
              <div className="flex relative h-[80px] justify-center items-center">
                <input
                  className="h-[45px] w-full bg-[#f5f5f5] rounded-[5px] outline-none border border-[#f2f2f2] px-2 text-[#2144e1] font-medium placeholder:font-normal"
                  type="text"
                  placeholder="Search products or stores"
                />
                <LiaSearchSolid className="absolute right-2 bottom-0 top-0 my-auto text-[25px] cursor-pointer fill-[#2144e1]" />
              </div>
            </Dialog>
            <IoSearch
              onClick={() => setSearch(true)}
              className="fill-[#2144e1] text-[27px] mr-10 cursor-pointer"
            />
          </Pane>
          <React.Fragment>
            <SideSheet
              isShown={isLogin}
              onCloseComplete={() => setLogin(false)}
            >
              <div className="flex flex-col items-center justify-center h-screen max-w-[80%] m-auto">
                <img
                  src={LogoIndex}
                  className="h-[40px] mt-8 ml-8 cursor-pointer"
                  alt=""
                />
                <div className="mt-10 w-[90%]">
                  <h2 className="text-[26px] font-bold nunito-font">Login</h2>
                  <p className="nunito-font text-[14px] mt-4 text-gray-500">
                    Sign in with your data that you entered during your
                    registration.
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
            </SideSheet>
            <RiShoppingBag3Line
              onClick={() => setLogin(true)}
              className="fill-[#2144e1] text-[27px] mr-10 cursor-pointer"
            />
          </React.Fragment>

          <Popover
            position={Position.BOTTOM_LEFT}
            content={
              <Menu>
                <Menu.Group title="Actions">
                  <Link to="/account">
                    <Menu.Item icon={TimelineLineChartIcon} intent="#213cb6">
                      Panel
                    </Menu.Item>
                  </Link>
                  <Link to="/wishlist">
                    <Menu.Item icon={HeartIcon} intent="#213cb6">
                      Wishlist
                    </Menu.Item>
                  </Link>
                </Menu.Group>
                <Menu.Divider />
                <Menu.Group title="Exit">
                  <Link to="/login">
                    <Menu.Item
                      onClick={() => setLogin(true)}
                      icon={LogOutIcon}
                      intent="danger"
                    >
                      Log out
                    </Menu.Item>
                  </Link>
                </Menu.Group>
              </Menu>
            }
          >
            <Avatar
              cursor="pointer"
              hashValue="id_124"
              name="Anonymous User"
              size={30}
            />
          </Popover>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
