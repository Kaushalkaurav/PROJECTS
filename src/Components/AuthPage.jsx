import React from "react";
import { Zap } from "lucide-react";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-around p-8 overflow-hidden relative">

    

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-lime-400 rounded-full p-3">
            <Zap className="text-black" fill="black" size={22} />
          </div>

          <h1 className="text-4xl font-bold">
            <span className="">Sky</span>
            <span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Hero */}
        <div className="max-w-3xl">

          <p className="uppercase text-lime-400 font-semibold">
            Welcome Back
          </p>

          <h1 className="text-7xl font-extrabold leading-tight">
            Shop the future.
            <br />
            <span className="text-lime-400">Today.</span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-xl leading-relaxed">
            Thousands of products, lightning-fast delivery, and
            prices that make your wallet happy.
          </p>

        

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border border-gray-600 rounded-3xl py-8 text-center hover:border-lime-400 transition">
            <h2 className="text-5xl font-bold text-lime-400">20K+</h2>
            <p className="text-gray-400 mt-3">Products</p>
          </div>

          <div className="border border-gray-600 rounded-3xl py-8 text-center hover:border-lime-400 transition">
            <h2 className="text-5xl font-bold text-lime-400">50K+</h2>
            <p className="text-gray-400 mt-3">Users</p>
          </div>

          <div className="border border-gray-600 rounded-3xl py-8 text-center hover:border-lime-400 transition">
            <h2 className="text-5xl font-bold text-lime-400">4.9★</h2>
            <p className="text-gray-400 mt-3">Rating</p>
          </div>

        </div>

      </div>
  
  );
};

export default Home;