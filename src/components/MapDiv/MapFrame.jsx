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
      {/* <h1>Satellite View Map</h1>
      <form id="locationForm" onSubmit={handleSubmit}>
        <label htmlFor="location">Select Location:</label>
        <select id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">-- Select a location --</option>
          <option value="28.7041,77.1025">New Delhi</option>
          <option value="19.0760,72.8777">Mumbai</option>
          <option value="12.9716,77.5946">Bengaluru</option>
          <option value="22.5726,88.3639">Kolkata</option>
          <option value="13.0827,80.2707">Chennai</option>
          <option value="28.56693988438441,77.18073383768586">Wesee work</option>
        </select>
        <br />
        <label htmlFor="latitude">Latitude:</label>
        <input clas type="text" id="latitude" name="latitude" value={latitude} readOnly />
        <br />
        <label htmlFor="longitude">Longitude:</label>
        <input type="text" id="longitude" name="longitude" value={longitude} readOnly />
        <br />
        <button type="submit">Show Location</button>
      </form> */}

      <div
      className="animate-ping"
        id="map"
        style={{ height: "calc(100vh - 250px)", width: "100%" }}
      ></div>

      {/* <div id="map" style={{ height: 'calc(80vh - 48px)', width: '100%' }}></div> */}
    </div>
  );
};

export default SatelliteViewMap;
