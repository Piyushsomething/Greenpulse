import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import NotificationCarousel from "./Notifications/NotificationCarousal";

const Nav = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
         {/* theme switcher */}
         <ThemeSwitcher />
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            GreenPulse : Nurturing Your Legacy
          </a>
        </div>
        <div className="navbar-end px-12">
          
          <Image
            className="rounded-3xl"
            width="60"
            height="60"
            src="/organic.gif"
          />
        </div>
      </div>
      <NotificationCarousel />
    </div>
  );
};

export default Nav;
