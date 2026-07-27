import React from "react";
import { useNavigate } from "react-router";
import { ShoppingCart, LogOut, Zap } from "lucide-react";

import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();

  const loggedInUsers = useSelector((state) => state.auth.loggedInUsers);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.warn("Logged Out Successfully");
  };

  const firstName = loggedInUsers?.name?.split(" ")[0] || "User";

  return (
    <nav className="w-full border-b border-gray-800 px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-lime-400 p-2 rounded-xl">
            <Zap size={20} className="text-black fill-black" />
          </div>

          <h1 className="text-3xl font-bold ">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        <div className="flex gap-10 font-semibold">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              isActive
                ? "text-lime-400"
                : "text-gray-900 hover:text-gray-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/products"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400"
                : "text-gray-900 hover:text-gray-400 transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400"
                : "text-gray-900 hover:text-gray-400 transition"
            }
          >
            About
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 border border-gray-700 rounded-2xl px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-lime-400 text-black font-bold flex justify-center items-center">
              {firstName.charAt(0).toUpperCase()}
            </div>

            <span className=" font-medium">{loggedInUsers?.name}</span>
          </div>

          <NavLink
            to="/main/cart"
            className={({ isActive }) =>
              isActive
                ? "bg-lime-400 rounded-2xl"
                : "text-gray-900 hover:text-gray-400 transition"
            }
          >
            <button className="relative border cursor-pointer border-gray-700 rounded-2xl p-3 hover:border-lime-400 transition">
              <ShoppingCart size={20} />

              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-lime-400 text-black text-xs flex justify-center items-center font-bold">
                {cartItems.length}
              </span>
            </button>
          </NavLink>

          <button
            onClick={handleLogout}
            className="border cursor-pointer border-gray-700 rounded-2xl p-3 hover:bg-red-500 hover:border-red-500 transition"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;