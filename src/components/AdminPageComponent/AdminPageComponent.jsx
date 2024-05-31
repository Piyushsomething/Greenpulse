"use client";
import React, { useEffect, useState } from "react";
import Navbar2 from "@/components/Dashboard/Navbar2";
import AdminComponent1 from "./AdminComponent1";
import AdminComponent3 from "./AdminComponent3";
import CesiumWrapper from "../Cesium/CesiumWrapper";

const AdminPageComponent = () => {
  const [selectedArea, setSelectedArea] = useState([   {     "x": 1262099.0963717857,     "y": 5466751.786890225,     "z": 3023368.6926637413   },   {     "x": 1308619.690004065,     "y": 5463393.852931658,     "z": 3009721.662073896   },   {     "x": 1251316.0690785071,     "y": 5481113.999219002,     "z": 3001915.3994118082   },   {     "x": 1249809.8868682592,     "y": 5470116.446985142,     "z": 3022394.4940282907   } ]);
  const [loading, setLoading] = useState(false);

  const handleAreaSelect = (area) => {
    setLoading(true);

    setSelectedArea(area);
    console.log("paste this",area);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [selectedArea]);

  const handleCesiumLoad = () => {
    setLoading(false);
  };
  const [userRequests, setUserRequests] = useState([
    {
      username: "JohnDoe",
      selectedArea: "Area 1",
      selectedPlant: "Rose",
      numberOfPlants: 10,
      status: "pending",
    },
    {
      username: "JaneSmith",
      selectedArea: "Area 2",
      selectedPlant: "Tulip",
      numberOfPlants: 15,
      status: "pending",
    },
    {
      username: "BobJohnson",
      selectedArea: "Area 3",
      selectedPlant: "Lily",
      numberOfPlants: 5,
      status: "pending",
    },
    {
      username: "BobJohnson",
      selectedArea: "Area 1",
      selectedPlant: "Lily",
      numberOfPlants: 5,
      status: "pending",
    },
  ]);

  const handleUserRequest = (index, action) => {
    const newRequests = [...userRequests];
    newRequests[index].status = action;
    setUserRequests(newRequests);
  };
  
  return (
    <div className="h-screen flex flex-col">
      <Navbar2 />
      <div className="flex flex-1 flex-col md:flex-row relative overflow-hidden">
        <div className="w-full md:w-1/6 h-full overflow-auto">
          <AdminComponent1
            onareaSelect={handleAreaSelect}
          />
        </div>
        <div className="w-full md:w-3/6 h-full overflow-auto">
          {/* <Component2 selectedArea={selectedArea} handleCesiumLoad={handleCesiumLoad} /> */}
          <div className="bg-green-200 h-full object-contain">
      <div className="h-full" style={{ height: "calc(100vh - 5.8rem)" }}>
          {loading ? (
              <div className="flex items-center justify-center h-full">
                <span className="loading loading-spinner loading-xs"></span>
              </div>
            ) : (
              selectedArea && (
                <CesiumWrapper
                  positions={selectedArea}
                  onCesiumLoad={handleCesiumLoad}
                  style={{ height: "100%", width: "100%" }}

                />
              )
            )}
            </div>
    </div>
        </div>
        <div className="w-full md:w-2/6 h-full overflow-auto">
          <AdminComponent3
            userRequests={userRequests}
            handleUserRequest={handleUserRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPageComponent;
