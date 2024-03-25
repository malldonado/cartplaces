import React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { GrLocation } from "react-icons/gr";
import { RiMessage3Line } from "react-icons/ri";
import {
  Popover,
  Menu,
  Position,
  Pane,
  Dialog,
  SideSheet,
  ShopIcon,
  ShoppingCartIcon,
} from "evergreen-ui";
import LogoIndex from "../../images/logo/logo.svg";

function Navbar() {
  const [isSearch, setSearch] = React.useState(false);
  const [isMap, setMap] = React.useState(false);
  const [isLogin, setLogin] = React.useState(false);

  return (
    <div>
      <nav className="bg-white">
        <div className="h-16 flex mx-auto px-2 max-w-[1230px] justify-center items-center">
          <Link className="w-[10%]" to="/">
            <img
              className="h-[36px] w-full my-auto cursor-pointer"
              src={LogoIndex}
            />
          </Link>
          <Pane className="w-[60%]">
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
              <button className="flex h-[45px] w-full bg-[#2144e1] text-white justify-center items-center mt-5 rounded-[5px] text-[16px] font-medium mb-6">
                <GrLocation className="text-[15px] mr-1" />
                Utilizar minha localização
              </button>
            </Dialog>
            <span
              onClick={() => setMap(true)}
              className="flex font-sans text-[16px] cursor-pointer font-medium justify-start items-center pl-10"
            >
              <div className="flex justify-center items-center">
                <span className="w-full"> Av. Europa, 1626 - Americana/SP</span>
                <MdOutlineKeyboardArrowDown className="fill-[#2144e1] text-[30px] mt-[0px]" />
              </div>
            </span>
          </Pane>
          <div className="w-[30%] flex justify-center items-center">
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
                className="fill-[#2144e1] text-[27px] mr-7 cursor-pointer"
              />
            </Pane>
            <RiMessage3Line className="fill-[#2144e1] text-[27px] mr-7 cursor-pointer" />

            <Popover
              position={Position.BOTTOM_CENTER}
              content={
                <Menu>
                  <Menu.Group>
                    <Menu.Item
                      width={300}
                      height={80}
                      onSelect={() => toaster.notify("Share")}
                    >
                      Share...
                    </Menu.Item>
                  </Menu.Group>
                  <Menu.Divider />
                  <Menu.Group>
                    <Menu.Item
                      icon={ShoppingCartIcon}
                      height={40}
                      intent="blue500"
                    >
                      Delete...
                    </Menu.Item>
                  </Menu.Group>
                </Menu>
              }
            >
              <ShopIcon fill={"#2144e1"} size={22} marginRight={30}></ShopIcon>
            </Popover>

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
              <button
                onClick={() => setLogin(true)}
                className="font-medium text-[14px] text-[#2144e1] border-2 border-[#2144e1] w-[80px] rounded-[5px] flex justify-center items-center h-[35px]"
              >
                Log in
              </button>
            </React.Fragment>
            <Link
              to="/register"
              className="ml-3 cursor-pointer font-medium text-[14px] text-[#2144e1] border-2 bg-[#c9ddff] border-[#c9ddff] w-[80px] rounded-[5px] flex justify-center items-center h-[35px]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
