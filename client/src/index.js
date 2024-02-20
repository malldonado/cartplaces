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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
