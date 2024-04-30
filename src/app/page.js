"use client";
// Home.js
import React, { useState, useEffect } from "react";
import GrowthTimeline from "@/components/GrowthTimelines/GrowthTimeline";
import Plantlocation from "@/components/PlantLocation/Plantlocation";
import ProfileCard from "@/components/Profile/ProfileCard";
import HealthReports from "@/components/HealthReports/HealthReports";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CesiumWrapper from "@/components/Cesium/CesiumWrapper";

export default function Home() {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [growthCount, setGrowthCount] = useState(1);
  const [timeoutReached, setTimeoutReached] = useState(false);

  const handleLocationSelect = (coordinates, growthCount) => {
    setSelectedCoordinates(coordinates);
    setGrowthCount(growthCount); // Set growthCount based on the selected location
    setLoading(true);
    setTimeoutReached(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeoutReached(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [selectedCoordinates]);

  const handleCesiumLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <Nav />
      <div className="flex h-[84vh] ">
        {/* Left Side Menu */}
        <div className="w-1/5 flex flex-col justify-around border-4 border-base-100">
          {/* First Box */}
          <div className="  mb-4 h-2/5 border-4 border-green-200 rounded-2xl">
            <h1 className="text-4xl font-bold text-center m-2 text-green-900">
              Plant Locations
              <Plantlocation onLocationSelect={handleLocationSelect} />
            </h1>
          </div>
          {/* Second Box */}
          <div className=" divider lg:divider-vertical"></div>

          <div className=" mr-8">
            <h1 className="text-4xl font-bold text-center  text-green-900">
              Profile{" "}
            </h1>
            <ProfileCard />
          </div>
        </div>
        {/* Middle Content */}
        <div className="flex-1 ">
          {/* Main Content */}
          <div className="h-full ">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <span className="loading loading-spinner loading-xs"></span>
              </div>
            ) : (
              selectedCoordinates && (
                <CesiumWrapper
                  positions={selectedCoordinates}
                  onCesiumLoad={handleCesiumLoad}
                />
              )
            )}
          </div>
        </div>
        {/* Right Side Menu */}
        <div className="w-1/5 flex flex-col">
          {/* First Box */}
          <div className="h-2/3 ">
            <h1 className="text-4xl font-bold text-center mt-2 text-green-900">
              Growth Timelines
            </h1>
            <h1 className="text-md font-bold text-center  text-green-900">
              (Drone captured)
            </h1>
            <GrowthTimeline growthCount={growthCount} /> {/* Pass growthCount as prop */}
          </div>
          <div className="divider lg:divider-vertical"></div>
          {/* Second Box */}
          <div className="h-1/3 px-12">
            <h1 className="text-4xl font-bold text-center m-2 text-green-900">
              Health Reports
            </h1>
            <HealthReports />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
