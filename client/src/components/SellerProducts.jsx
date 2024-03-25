import React from "react";
import NavbarLeft from "./account/NavbarLeft";
import ContainerPanel from "./account/ContainerPanel";
import "./index.css";
import Navbar from "./index/Navbar";

function SellerProducts() {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <Navbar />
      <div className="max-w-[1450px] h-[90vh] m-auto flex">
        <NavbarLeft />
        {/* <ContainerPanel /> */}
      </div>
    </div>
  );
}

export default SellerProducts;
