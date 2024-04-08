"use client"
import React, { useState } from 'react';
import GrowthTimeline from "@/components/GrowthTimelines/GrowthTimeline";
import Hero from "@/components/Hero/Hero";
import SatelliteViewMap from "@/components/MapDiv/MapFrame";
import Plantlocation from "@/components/PlantLocation/Plantlocation";
import ProfileCard from "@/components/Profile/ProfileCard";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(true);
  };

  return (
    <div>
      {/* Render Hero component only if showContent is false */}
      {!showContent && (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButtonClick}>
          OK
        </button>
      )}
      {!showContent && <Hero />}

      {/* Button to show content */}

      {/* Show the content after the user clicks OK button */}
      {showContent && (
        <div className="flex h-[85vh]">
          {/* Left Side Menu */}
          <div className="w-1/5 flex flex-col">
            {/* First Box */}
            <div className="h-auto mb-4">
              <Plantlocation />
            </div>
            {/* Second Box */}
            <div className="h-1/3 p-12">
              <ProfileCard />

            </div>
          </div>

          {/* Middle Content */}
          <div className="flex-1 ">
            {/* Main Content */}
            <div className="h-full p-8">Satellite Image
              <SatelliteViewMap/>
            </div>
          </div>

          {/* Right Side Menu */}
          <div className="w-1/5 flex flex-col">
            {/* First Box */}
            <div className="h-2/3 m-12 p-12">
              <GrowthTimeline />
            </div>
            {/* Second Box */}
            <div className="h-1/3 px-12">
            Health Reports - Box 2 (1/3 height)

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
