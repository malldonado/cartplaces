import React from "react";
import NavbarLeft from "./seller/NavbarLeft";
import ContainerPanel from "./seller/ContainerPanel";
import "./index.css";
import Navbar from "./seller/Navbar";

function Seller() {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="max-w-[80%] h-[90vh] m-auto flex">
        <NavbarLeft />
        {/* <ContainerPanel /> */}
      </div>
    </div>
  );
}

export default Seller;
