import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from 'axios';
import Index from "./components/Index.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/index/Products.jsx";
import Account from "./components/Account.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Seller from "./components/Seller.jsx";
import Product from "./components/Product.jsx";
import Store from "./components/Store.jsx";
import Terms from "./components/Terms.jsx";
import SellerProducts from "./components/SellerProducts.jsx";
// import Profile from "./components/Profile.jsx";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/wishlist",
    element: <Wishlist/>
  },
  {
    path: "/seller",
    element: <Seller/>
  },
  {
    path: "/product",
    element: <Product/>
  },
  {
    path: "/store",
    element: <Store/>
  },
  {
    path: "/terms",
    element: <Terms/>
  },
  {
    path: "/seller-products",
    element: <SellerProducts/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
