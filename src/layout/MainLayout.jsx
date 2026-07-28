import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />


      <div className="flex-1 p-2 overflow-auto">
        <Outlet />
      </div>

      <Footer/>
    </div>
  );
};

export default MainLayout;