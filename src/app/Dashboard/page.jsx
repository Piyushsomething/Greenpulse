// Dashboard_Page.js
"use client"
import React, { useState } from "react";
import Component1 from "@/components/Dashboard/Component1";
import Component2 from "@/components/Dashboard/Component2";
import Component3 from "@/components/Dashboard/Component3";
import Navbar2 from "@/components/Dashboard/Navbar2";

const Dashboard_Page = () => {
  const [selectedArea, setSelectedArea] = useState("");

  return (
    <div className="h-screen flex flex-col">
      <Navbar2 />
      <div className="flex flex-1 flex-col md:flex-row ">
        <div className="w-full md:w-1/6">
          <div className="h-full" style={{ height: "calc(100vh - 5.8rem)" }}>
            <Component1 setSelectedArea={setSelectedArea} />
          </div>
        </div>
        <div className="w-full md:w-4/6">
          <div className="h-full" style={{ height: "calc(100vh - 5.8rem)" }}>
            <Component2 selectedArea={selectedArea} />
          </div>
        </div>
        <div className="w-full md:w-1/6">
          <div className="h-full" style={{ height: "calc(100vh - 5.8rem)" }}>
            <Component3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Page;
