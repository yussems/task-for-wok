import React from "react";

const CustomLoading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
      <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin border-violet-950 "></div>
      <p className="text-gray-500">Loading</p>
    </div>
  );
};

export default CustomLoading;
