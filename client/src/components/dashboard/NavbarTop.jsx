import React from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { Pane, Dialog, Avatar, SideSheet, Paragraph } from "evergreen-ui";

function NavbarTop() {
  const [isSignIn, setSignIn] = React.useState(false);
  const [isNotification, setNotification] = React.useState(false);

  return (
    <div className="mt-6 flex h-[50px] items-center">
      <div className="w-[65%]">
        <span className="text-[14px]">
          <span className="text-[#a2a8ac]">Dashboard</span>{" "}
          <span className="mx-1">/</span> Home
        </span>
        <h2 className="font-semibold text-[17px] mt-1">Home</h2>
      </div>
      <input
        placeholder="Search"
        className="h-[40px] w-[300px] border-[1px] focus:border-[#000] rounded-[5px] border-[#b0bec5] bg-transparent outline-none px-2 my-auto placeholder:text-[14px] text-[14px] font-medium"
        type="text"
      />
      <React.Fragment>
        <SideSheet isShown={isSignIn} onCloseComplete={() => setSignIn(false)}>
          <Paragraph margin={40}>Basic Example</Paragraph>
        </SideSheet>
        <Avatar
          marginTop="2px"
          marginLeft="20px"
          cursor="pointer"
          onClick={() => setSignIn(true)}
          name="Jeroen Ransijn"
          size={40}
        />
      </React.Fragment>
      <span className="ml-5 text-[20px]">
        <AiOutlineSetting />
      </span>
      <Pane marginLeft="20px" cursor="pointer">
        <Dialog
          isShown={isNotification}
          title="Dialog title"
          onCloseComplete={() => setNotification(false)}
          confirmLabel="Custom Label"
        >
          Dialog content
        </Dialog>
        <span onClick={() => setNotification(true)} className="text-[20px]">
          <FaRegBell />
        </span>
      </Pane>
    </div>
  );
}

export default NavbarTop;
