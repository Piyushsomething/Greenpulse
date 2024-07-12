"use client";
import React from "react";
import { Cartesian3 } from "cesium"; // Ensure you have Cesium imported

const Plantlocation = ({ onLocationSelect, growthDone }) => {
  const locations = [
    {
      name: "Los Angeles",
      longitude: "24.8607 24.9226 24.9442 24.9635",
      latitude: "67.0011 67.0825 66.9684 66.9478",
      growthDone: 3
    },
    {
      name: "Delhi",
      longitude: "28.48 28.34 28.26 28.47",
      latitude: "77.00 76.53 77.14 77.13",
      growthDone: 4

    },
    {
      name: "Taiwan Square (1 sq km)",
      longitude: "25.1230 24.5223 24.5223 25.1230",
      latitude: "121.4571 121.4571 120.8564 120.8564",
      growthDone: 2

    },
    {
      name: "Kargil Rectangle Area (1 sq km)",
      longitude: "34.5591 34.5591 34.5582 34.5582",
      latitude: "76.1029 76.1198 76.1198 76.1029",
      growthDone: 1

    },
    {
      name: "Los Angeles",
      longitude: "24.8607 24.9226 24.9442 24.9635",
      latitude: "67.0011 67.0825 66.9684 66.9478",
      growthDone: 3
    },
    {
      name: "Delhi",
      longitude: "28.48 28.34 28.26 28.47",
      latitude: "77.00 76.53 77.14 77.13",
      growthDone: 4

    },
    {
      name: "Taiwan Square (1 sq km)",
      longitude: "25.1230 24.5223 24.5223 25.1230",
      latitude: "121.4571 121.4571 120.8564 120.8564",
      growthDone: 2

    },
    {
      name: "Kargil Rectangle Area (1 sq km)",
      longitude: "34.5591 34.5591 34.5582 34.5582",
      latitude: "76.1029 76.1198 76.1198 76.1029",
      growthDone: 1

    },
    
  ];
  const handleRowClick = (location) => {
    const lat = location.longitude.split(" ");
    const lon = location.latitude.split(" ");
    const growthCountFetch = location.growthDone;
    const vare = [
      Cartesian3.fromDegrees(parseFloat(lon[0]), parseFloat(lat[0])),
      Cartesian3.fromDegrees(parseFloat(lon[1]), parseFloat(lat[1])),
      Cartesian3.fromDegrees(parseFloat(lon[2]), parseFloat(lat[2])),
      Cartesian3.fromDegrees(parseFloat(lon[3]), parseFloat(lat[3])),
    ];
    console.log("Cartisian,fromDegree: ", vare);
    onLocationSelect(vare, growthCountFetch);

  };
  return (
    <div>
      <div className="overflow-x-auto h-[45vh] ">
        <table className="table table-pin-rows table-zebra">
          <thead className="">
            <tr className="underline text-center bg-green-200 ">
              <th className="">Location</th>
              <th className="w-12">Latitude</th>
              <th className="w-12">Longitude</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr
                key={index}
                className="text-center cursor-pointer hover:bottom-40 hover:border-green-400"
                onClick={() => handleRowClick(location)}
              >
                <td className="">{location.name}</td>
                <td className="whitespace-break-spaces">{location.latitude}</td>
                <td className="whitespace-break-spaces">
                  {location.longitude}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plantlocation;
