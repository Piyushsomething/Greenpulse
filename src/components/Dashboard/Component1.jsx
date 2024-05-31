"use client";

import React, { useState } from "react";
import areasData from "./areas.json";
import plantsData from "./plants.json";
import { useRouter } from "next/navigation";

const Component1 = ({ setSelectedArea }) => {
  const router = useRouter();

  const [selectedArea, setSelectedAreaLocal] = useState(""); // Define selectedArea state

  const handleAreaChange = (e) => {
    setSelectedAreaLocal(e.target.value); // Update selectedArea state
    setSelectedArea(e.target.value); // Update selectedArea in parent component
  };

  const [selectedPlant, setSelectedPlant] = useState("");
  const [numberOfPlants, setNumberOfPlants] = useState(0);
  const [previewData, setPreviewData] = useState("");

  const handlePreview = () => {
    const preview = `Username: Anuj\nSelected Area: ${selectedArea}\nSelected Plant: ${selectedPlant}\nNumber of Plants: ${numberOfPlants}`;
    setPreviewData(preview);
    const alertMessage = `Preview Data:\n${preview}\n\nProceed to payment...`;
    if (window.confirm(alertMessage)) {
      router.push('/payment');
    }
  };

  const handlePayment = () => {
    // const alertMessage = `Preview Data:\n${previewData}\n\nProceeding to payment...`;
    // alert(alertMessage);
    router.push('/payment');
  };

  return (
    <div className="p-4  h-full ">
      <h2 className="text-2xl font-semibold mb-4">Select Options</h2>
      <div className="mb-4">
        <label htmlFor="area" className="block text-gray-700 font-bold mb-2">
          Select Area:
        </label>
        <select
          id="area"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
          value={selectedArea}
          onChange={handleAreaChange} // Use handleAreaChange to update selectedArea
        >
          <option value="">Select Area</option>
          {areasData.map((area, index) => (
            <option key={index} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="plant" className="block text-gray-700 font-bold mb-2">
          Select Variety of Plant:
        </label>
        <select
          id="plant"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:outline-none"
          value={selectedPlant}
          onChange={(e) => setSelectedPlant(e.target.value)}
        >
          <option value="">Select Plant</option>
          {plantsData.map((plant, index) => (
            <option key={index} value={plant}>
              {plant}
            </option>
          ))}
        </select>
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
