import React from "react";

const Footer = () => {
  return (
    <div className=" p-4 flex items-center justify-center border-t">
      <div className="flex gap-2 flex-col items-center justify-center">
        <h1 className="text-2xl text-lime-400">SkyMart</h1>
        <p className="text-gray-500">
          &copy; 2026 SkyMart &bull; Built with React &bull; By{" "}
          <span className="font-semibold">Akshat Agrawal</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(Footer);