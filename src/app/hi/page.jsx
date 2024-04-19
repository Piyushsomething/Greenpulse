"use client"
import React from 'react';
import CesiumWrapper from "@/components/Cesium/CesiumWrapper";
import { Cartesian3 } from 'cesium'; // Import Cartesian3 from Cesium

export default function MainPage() {
 // Define the polygon coordinates using Cartesian3.fromDegrees
 const positions = [
    Cartesian3.fromDegrees(-75.59777, 40.03883),
    Cartesian3.fromDegrees(-80.6097, 25.7619),
    Cartesian3.fromDegrees(-66.0904, 18.4860),
    Cartesian3.fromDegrees(-64.7579, 32.3219)
 ];

 return (
    <CesiumWrapper positions={positions} />
 );
}
