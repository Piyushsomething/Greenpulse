import React from "react";
import GrowthTimeline from "@/components/GrowthTimelines/GrowthTimeline";
import SatelliteViewMap from "@/components/MapDiv/MapFrame";
import Plantlocation from "@/components/PlantLocation/Plantlocation";
import ProfileCard from "@/components/Profile/ProfileCard";

export default function Home() {
  return (
    <div>
      <div className="flex h-[85vh] border-4 border-base-100">
        {/* Left Side Menu */}
        <div className="w-1/5 flex flex-col border-4 border-base-100">
          {/* First Box */}
          <div className="h-3/5 mb-4 border-4 border-green-200 rounded-2xl">
            <Plantlocation />
          </div>
          {/* Second Box */}
          <div className="h-2/5 ">
          {/* <div className="skeleton min-h-32 h-auto w-full"></div> */}
            <ProfileCard />
          </div>
        </div>

        {/* Middle Content */}
        <div className="flex-1 ">
          {/* Main Content */}
          <div className="h-full ">
            
            <SatelliteViewMap />
          </div>
        </div>

        {/* Right Side Menu */}
        <div className="w-1/5 flex flex-col">
          {/* First Box */}
          <div className="h-2/3 ">
            <GrowthTimeline />
          </div>
          <div className="divider lg:divider-vertical">OR</div> 
          {/* Second Box */}
          <div className="h-1/3 px-12">Health Reports - Box 2 (1/3 height)</div>
        </div>
        
      </div>
    </div>
  );
}
