import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ProductPage from "../Pages/ProductPage";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import AddProduct from "../Pages/AddProduct";
import EditProduct from "../Pages/EditProduct";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "products/add",
              element: <AddProduct/>,
            },
            {
              path: "products/edit/:id",
              element: <EditProduct />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
