import React from "react";

const Plantlocation = () => {
  const locations = [
    { name: "New York City", latitude: "40.7128", longitude: "-74.0060" },
  { name: "Los Angeles", latitude: "34.0522", longitude: "-118.2437" },
  { name: "London", latitude: "51.5074", longitude: "-0.1278" },
  { name: "Paris", latitude: "48.8566", longitude: "2.3522" },
  { name: "Tokyo", latitude: "35.6895", longitude: "139.6917" },
  { name: "Sydney", latitude: "-33.8688", longitude: "151.2093" },
  { name: "Dubai", latitude: "25.276987", longitude: "55.296249" },
  { name: "Mumbai", latitude: "19.0760", longitude: "72.8777" },
  { name: "Hong Kong", latitude: "22.3193", longitude: "114.1694" },
  { name: "Singapore", latitude: "1.3521", longitude: "103.8198" },
  { name: "New York City", latitude: "40.7128", longitude: "-74.0060" },
  { name: "Los Angeles", latitude: "34.0522", longitude: "-118.2437" },
  { name: "London", latitude: "51.5074", longitude: "-0.1278" },
  { name: "Paris", latitude: "48.8566", longitude: "2.3522" },
  { name: "Tokyo", latitude: "35.6895", longitude: "139.6917" },
  { name: "Sydney", latitude: "-33.8688", longitude: "151.2093" },
  { name: "Dubai", latitude: "25.276987", longitude: "55.296249" },
  { name: "Mumbai", latitude: "19.0760", longitude: "72.8777" },
  { name: "Hong Kong", latitude: "22.3193", longitude: "114.1694" },
  { name: "Singapore", latitude: "1.3521", longitude: "103.8198" },
    // Add more locations as needed
  ];

  return (
    <div>
      <div className="overflow-x-auto h-96">
        <table className="table table-pin-rows">
          <thead>
            <tr>
              <th>Location</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location, index) => (
              <tr key={index}>
                <td>{location.name}</td>
                <td>{location.latitude}</td>
                <td>{location.longitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Plantlocation;