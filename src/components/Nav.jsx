import React from "react";
import Image from "next/image";
import NotificationCarousel from "./Notifications/NotificationCarousal";

const Nav = () => {
  return (
    <div className="flex flex-col items-center border-4 rounded-3xl">
      <div className="navbar bg-green-900 rounded-3xl border-4">
        <div className="navbar-start">
          <Image
            alt="rightImage"
            className="rounded-3xl"
            width="100"
            height="100"
            src="/organic.gif"
          />
        </div>
        <div className="navbar-center">
          <a className="animate-pulse  btn btn-ghost text-5xl underline text-[#87A922] ">
            GreenPulse : Nurturing Your Legacy
          </a>
        </div>
        <div className="navbar-end px-12">
          <Image
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
