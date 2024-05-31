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
            <Component2 selectedArea={[   {     "x": 1262099.0963717857,     "y": 5466751.786890225,     "z": 3023368.6926637413   },   {     "x": 1308619.690004065,     "y": 5463393.852931658,     "z": 3009721.662073896   },   {     "x": 1251316.0690785071,     "y": 5481113.999219002,     "z": 3001915.3994118082   },   {     "x": 1249809.8868682592,     "y": 5470116.446985142,     "z": 3022394.4940282907   } ]} /> Pass selected area to Component2
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
