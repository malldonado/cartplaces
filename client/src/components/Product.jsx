import React from "react";
import Navbar from "./product/Navbar";
import Description from "./product/Description";
import Banner from "./product/Banner";
import Products from "./product/Products";
import Footer from "./product/Footer";

function Product() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Description/>
      <Products/>
      <Footer/>
    </>
  );
}

export default Product;
