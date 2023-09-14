import Image from "next/image";
import React from "react";

const CustomError = () => {
  return (
    <div className="w-full h-screen flex-col flex items-center justify-center">
      <Image
        className="object-contain"
        width={500}
        height={500}
        src={"/assets/error.jpg"}
        alt="error page"
      />
      <p className="text-gray-500 text-sm">
        <a href="https://www.freepik.com/free-vector/error-404-concept-illustration_7741849.htm#query=404&position=3&from_view=keyword&track=sph">
          Image by storyset
        </a>{" "}
        on Freepik
      </p>
    </div>
  );
};

export default CustomError;
