"use client";
import React from "react";
import { Cartesian3 } from "cesium"; // Ensure you have Cesium imported

const Plantlocation = ({ onLocationSelect }) => {
  const locations = [
    // {
    //   name: "Random Location 1",
    //   latitude: "0 0 20 20",
    //   longitude: "0 20 20 0",
    // },
    // {
    //   name: "Random Location 2",
    //   latitude: "100.59777 60.6097 56.0904 -14.7579",
    //   longitude: "20.03883 26.7619 98.4860 62.3219",
    // },
    {
      "name": "Karachi",
      "longitude": "24.8607 24.9226 24.9442 24.9635",
      "latitude": "67.0011 67.0825 66.9684 66.9478"
    },
    {
      "name": "Delhi",
      "longitude": "28.48 28.34 28.26 28.47",
      "latitude": "77.00 76.53 77.14 77.13"
    },
    {
      "name": "Taiwan Square (1 sq km)",
      "longitude": "25.1230 24.5223 24.5223 25.1230",
      "latitude": "121.4571 121.4571 120.8564 120.8564"
    },
    {
      "name": "Kargil Rectangle Area (1 sq km)",
      "longitude": "34.5591 34.5591 34.5582 34.5582",
      "latitude": "76.1029 76.1198 76.1198 76.1029"
    }
    ,
    // 28°48'18"N 77°00'04"E
    // 28°34'23"N 76°53'17"E
    // 28°26'44"N 77°14'07"E
    // 28°47'08"N 77°13'37"E
    // { name: "Los Angeles", latitude: "34.0522", longitude: "-118.2437" },
    // { name: "London", latitude: "51.5074", longitude: "-0.1278" },
    // { name: "Paris", latitude: "48.8566", longitude: "2.3522" },
    // { name: "Tokyo", latitude: "35.6895", longitude: "139.6917" },
    // { name: "Sydney", latitude: "-33.8688", longitude: "151.2093" },
    // { name: "Dubai", latitude: "25.276987", longitude: "55.296249" },
    // { name: "Mumbai", latitude: "19.0760", longitude: "72.8777" },
    // { name: "Hong Kong", latitude: "22.3193", longitude: "114.1694" },
    // { name: "Singapore", latitude: "1.3521", longitude: "103.8198" },
    // { name: "New York City", latitude: "40.7128", longitude: "-74.0060" },
    // { name: "Los Angeles", latitude: "34.0522", longitude: "-118.2437" },
    // { name: "London", latitude: "51.5074", longitude: "-0.1278" },
    // { name: "Paris", latitude: "48.8566", longitude: "2.3522" },
    // { name: "Tokyo", latitude: "35.6895", longitude: "139.6917" },
    // { name: "Sydney", latitude: "-33.8688", longitude: "151.2093" },
    // { name: "Dubai", latitude: "25.276987", longitude: "55.296249" },
    // { name: "Mumbai", latitude: "19.0760", longitude: "72.8777" },
    // { name: "Hong Kong", latitude: "22.3193", longitude: "114.1694" },
    // { name: "Singapore", latitude: "1.3521", longitude: "103.8198" },
    // Add more locations as needed
  ];
  const handleRowClick = (location) => {
    // window.location.reload();
    const lat = location.longitude.split(" ");
    const lon = location.latitude.split(" ");
    const vare = [
      Cartesian3.fromDegrees(parseFloat(lon[0]), parseFloat(lat[0])),
      Cartesian3.fromDegrees(parseFloat(lon[1]), parseFloat(lat[1])),
      Cartesian3.fromDegrees(parseFloat(lon[2]), parseFloat(lat[2])),
      Cartesian3.fromDegrees(parseFloat(lon[3]), parseFloat(lat[3])),
    ];
    console.log("Cartisian,fromDegree: ", vare);
    onLocationSelect(vare);
  };
  return (
    <div>
      <div className="overflow-x-auto h-[30vh] ">
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
                <td className="whitespace-break-spaces">{location.longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plantlocation;
