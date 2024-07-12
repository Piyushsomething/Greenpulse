"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Cartesian3 } from "cesium";

const Component1 = ({ setSelectedArea }) => {
  const router = useRouter();
  const [areasData, setAreasData] = useState([]);
  const [plantsData, setPlantsData] = useState([]);
  const [loadingAreas, setLoadingAreas] = useState(true);
  const [loadingPlants, setLoadingPlants] = useState(true);
  const [selectedArea, setSelectedAreaLocal] = useState("");
  const [selectedPlant, setSelectedPlant] = useState("");
  const [numberOfPlants, setNumberOfPlants] = useState(0);
  const [previewData, setPreviewData] = useState("");

  useEffect(() => {
    const fetchAreasData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/area/`);
        const data = await response.json();
        setAreasData(data);
      } catch (error) {
        console.error('Error fetching areas data:', error);
      } finally {
        setLoadingAreas(false);
      }
    };

    const fetchPlantsData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/plants/`);
        const data = await response.json();
        setPlantsData(data);
      } catch (error) {
        console.error('Error fetching plants data:', error);
      } finally {
        setLoadingPlants(false);
      }
    };

    fetchAreasData();
    fetchPlantsData();
  }, []);

  const handleAreaChange = (e) => {
    const selectedAreaName = e.target.value;
    setSelectedAreaLocal(selectedAreaName);
    const area = areasData.find(area => area.area === selectedAreaName);

    if (area) {
      const coordinates = area.lat[0].split(" ").map((lat, index) => {
        const lon = area.lon[0].split(" ")[index];
        const parsedLat = parseFloat(lat);
        const parsedLon = parseFloat(lon);
        return Cartesian3.fromDegrees(parsedLon, parsedLat);
      });
      setSelectedArea(coordinates);
      console.log("selectedf cordinates",coordinates);
    }
  };

  const handlePreview = async () => {
    const preview = `\nSelected Area: ${selectedArea}\nSelected Plant: ${selectedPlant}\nNumber of Plants: ${numberOfPlants}`;
    setPreviewData(preview);
    const alertMessage = `Preview Data:\n${preview}\n\nProceed to payment...`;
    if (window.confirm(alertMessage)) {
      try {
        const token = Cookies.get('access_token_login');
        console.log("Retrieved token:", token);
        if (!token) {
          throw new Error("Token not found in cookies.");
        }

        const selectedAreaObj = areasData.find(area => area.area === selectedArea);
        const selectedPlantObj = plantsData.find(plant => plant.plant_name === selectedPlant);

        if (!selectedAreaObj || !selectedPlantObj) {
          throw new Error("Selected area or plant is invalid.");
        }

        const response = await fetch(`http://127.0.0.1:8000/tickets/`, {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            payment_status: false,
            selected_area: selectedAreaObj.id,
            selected_plants: selectedPlantObj.id,
            no_of_plants: numberOfPlants
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error submitting ticket:', errorData);
          throw new Error(errorData.detail || 'Unknown error');
        }

        router.push('/payment');
      } catch (error) {
        console.error('Error submitting ticket:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  const handlePayment = () => {
    router.push('/payment');
  };

  return (
    <div className="p-4 h-full">
      <h2 className="text-2xl font-semibold mb-4">Select Options</h2>
      <div className="mb-4">
        <label htmlFor="area" className="block text-gray-700 font-bold mb-2">
          Select Area:
        </label>
        {loadingAreas ? (
          <div>Loading...</div>
        ) : (
          <select
            id="area"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
            value={selectedArea}
            onChange={handleAreaChange}
          >
            <option value="">Select Area</option>
            {areasData.map((area) => (
              <option key={area.id} value={area.area}>
                {area.area}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="plant" className="block text-gray-700 font-bold mb-2">
          Select Variety of Plant:
        </label>
        {loadingPlants ? (
          <div>Loading...</div>
        ) : (
          <select
            id="plant"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
            value={selectedPlant}
            onChange={(e) => setSelectedPlant(e.target.value)}
          >
            <option value="">Select Plant</option>
            {plantsData.map((plant) => (
              <option key={plant.id} value={plant.plant_name}>
                {plant.plant_name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="numberOfPlants"
          className="block text-gray-700 font-bold mb-2"
        >
          Number of Plants:
        </label>
        <input
          id="numberOfPlants"
          type="number"
          min="0"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
          value={numberOfPlants}
          onChange={(e) => setNumberOfPlants(parseInt(e.target.value))}
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={numberOfPlants}
          onChange={(e) => setNumberOfPlants(parseInt(e.target.value))}
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
        onClick={handlePreview}
      >
        Preview
      </button>
      {previewData && (
        <div className="mt-4 border-t pt-4">
          <h2 className="text-lg font-semibold mb-2">Preview:</h2>
          <pre>{previewData}</pre>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Component1;