import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
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
              title="Dialog title"
              onCloseComplete={() => setMap(false)}
              confirmLabel="Custom Label"
            >
              Dialog content
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
              title="Dialog title"
              onCloseComplete={() => setSearch(false)}
              confirmLabel="Custom Label"
            >
              Dialog content
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
