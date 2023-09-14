import React from "react";

const Navbar = () => {
  return (
    <div className="p-8 flex justify-between items-center">
      <div>
        <p className="text-3xl font-semibold">COUNTRIES</p>
      </div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="language" className="block mb-2">Language</label>
          <input className="w-full rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-violet-600 border-gray-300 text-gray-900 p-1" type="text" id="language" />
        </div>
        <div>
          <label className="block mb-2" htmlFor="curren">Currency</label>
          <input type="text" className="w-full rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-violet-600 border-gray-300 p-1 text-gray-900" id="curren" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
