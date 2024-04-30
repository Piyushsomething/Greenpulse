import React from "react";
import Image from "next/image";
import NotificationCarousel from "./Notifications/NotificationCarousal";

const Nav = () => {
  return (
    <div className="flex flex-col items-center border-4 rounded-3xl">
      <div className="navbar bg-green-900 rounded-3xl border-4">
        <div className="navbar-start">
          <Image
          unoptimized
            alt="rightImage"
            className="rounded-3xl"
            width="100"
            height="100"
            src="/organic.gif"
          />
        </div>
        <div className="navbar-center">
          <div className="  btn btn-ghost text-8xl mb-12 font-extrabold underline text-[#87A922] ">
            GreenPulse : Nurturing Your Legacy
          </div>
        </div>
        <div className="navbar-end px-12">
          <Image
          unoptimized
            alt="rightImage"
            className="rounded-3xl"
            width="100"
            height="100"
            src="/sprout.gif"
          />
        </div>
      </div>
      <div className="rounded-3xl border-4 w-screen justify-center">
        <NotificationCarousel />
      </div>
    </div>
  );
};

export default Nav;
