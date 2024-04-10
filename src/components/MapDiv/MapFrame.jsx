"use client";
import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const SatelliteViewMap = () => {
  const [map, setMap] = useState(null);
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    const mapInstance = L.map("map").setView([28.7041, 77.1025], 10); // Default view at New Delhi
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapInstance
    );
    setMap(mapInstance);

    return () => {
      if (mapInstance) {
        mapInstance.remove();
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) return;

    const [lat, lng] = location.split(",");
    setLatitude(lat.trim());
    setLongitude(lng.trim());

    if (map) {
      map.setView([parseFloat(lat), parseFloat(lng)], 10);
      L.marker([parseFloat(lat), parseFloat(lng)]).addTo(map);
    }
  };

  return (
    <div>
      <div
        id="map"
        style={{ height: "calc(100vh - 255px)", width: "100%" }}
      ></div>
    </div>
  );
};

export default SatelliteViewMap;
