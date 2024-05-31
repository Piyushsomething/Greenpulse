"use client";
import React, { useEffect, useState } from "react";
import CesiumWrapper from "../Cesium/CesiumWrapper";
const Component2 = ({ selectedArea, handleCesiumLoad }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedArea) {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [selectedArea]);

  return (
    <div className="bg-green-200 h-full object-contain">
      <div className="h-full" style={{ height: "calc(100vh - 5.8rem)" }}>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <span className="loading loading-spinner loading-xs"></span>
          </div>
        ) : (
          selectedArea && (
            <CesiumWrapper
              positions={selectedArea}
              onCesiumLoad={handleCesiumLoad}
              style={{ height: "100%", width: "100%" }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Component2;
