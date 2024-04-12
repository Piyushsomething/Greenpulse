import Image from "next/image";
import React from "react";

const Banner = () => {
 return (
    <div className="w-full flex items-center justify-center relative p-4">
      <div className="w-[80%]">

      <Image
        className="w-full object-cover"
        src="/homepage.png"
        layout="responsive"
        width={1000}
        height={1000}
        alt="banner image"
        />
        </div>
    </div>
 );
};

export default Banner;