import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Index from "./components/Index.jsx";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/index/Products.jsx";
import Account from "./components/Account.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Seller from "./components/Seller.jsx";
import Product from "./components/Product.jsx";
// import Profile from "./components/Profile.jsx";

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
  // {
  //   path: "/profile",
  //   element: <Profile/>
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
