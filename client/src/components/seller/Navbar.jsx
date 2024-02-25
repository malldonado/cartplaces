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
} from "evergreen-ui";
import LogoIndex from "../../images/logo/logo.svg";

function Navbar() {
  const [isSearch, setSearch] = React.useState(false);
  const [isMap, setMap] = React.useState(false);

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
          <RiShoppingBag3Line className="fill-[#2144e1] text-[27px] mr-10 cursor-pointer" />
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
                    <Menu.Item icon={LogOutIcon} intent="danger">
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
