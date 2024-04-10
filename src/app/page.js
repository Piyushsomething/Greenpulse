import React from "react";
import GrowthTimeline from "@/components/GrowthTimelines/GrowthTimeline";
import SatelliteViewMap from "@/components/MapDiv/MapFrame";
import Plantlocation from "@/components/PlantLocation/Plantlocation";
import ProfileCard from "@/components/Profile/ProfileCard";
import HealthReports from "@/components/HealthReports/HealthReports";

export default function Home() {
  return (
    <div>
      <div className="flex h-[84vh] ">
        {/* Left Side Menu */}
        <div className="w-1/5 flex flex-col border-4 border-base-100">
          {/* First Box */}
          <div className="h-3/5 mb-4 border-4 border-green-200 rounded-2xl">
            <h1 className="text-4xl font-bold text-center m-2 text-green-900">
              Plant Locations
            </h1>
            <Plantlocation />
          </div>
          {/* Second Box */}
          <div className="h-auto mr-8">
            {/* <div className="skeleton min-h-32 h-auto w-full"></div> */}
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
            <SatelliteViewMap />
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

            <GrowthTimeline />
          </div>
          <div className="divider lg:divider-vertical">OR</div>
          {/* Second Box */}
          <div className="h-1/3 px-12">
            <h1 className="text-4xl font-bold text-center m-2 text-green-900">
              Health Reports
            </h1>

            <HealthReports />
          </div>
        </div>
      </div>
    </div>
  );
}
