import Image from "next/image";
import React from "react";

const LoginNav = () => {
  return (
    <nav className="bg-green-700 p-4">
      <div className="flex justify-start gap-96 items-center">
        <div className="flex items-center">
          <Image
            alt="leftImage"
            className="rounded-3xl"
            width="60"
            height="60"
            src="/organic.gif"
          />
          <span className="text-white text-lg font-semibold ml-4">GreenPulse</span>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <span className=" text-lg md:font-extrabold md:text-5xl  text-[#87A922]">
          GreenPulse : Nurturing Your Legacy
          </span>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <Image
              alt="rightImage"
              className="rounded-3xl"
              width="60"
              height="60"
              src="/sprout.gif"
            />
          </button>
        </div>
      </div>
      <div className="md:hidden mt-2">
        <span className=" text-lg font-extrabold  text-[#87A922]  animate-pulse">
        GreenPulse : Nurturing Your Legacy
        </span>
      </div>
    </nav>
  );
};

export default LoginNav;
