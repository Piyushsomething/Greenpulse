import React, { useEffect, useRef, useState } from 'react';
import { dateToJulianDate } from './date';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export const CesiumComponent = ({ CesiumJs, positions }) => {
    const cesiumViewer = useRef(null);
    const cesiumContainerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        if (cesiumViewer.current === null && cesiumContainerRef.current) {
            cesiumViewer.current = new CesiumJs.Viewer(cesiumContainerRef.current);
            cesiumViewer.current.clock.clockStep = CesiumJs.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
        }
    }, []);

    useEffect(() => {
        if (isLoaded && cesiumViewer.current !== null) {
            // Use the positions prop to create the polygon coordinates
            const polygonCoordinates = positions;

            // Add the polygon entity
            cesiumViewer.current.entities.add({
                polygon: {
                    hierarchy: polygonCoordinates,
                    material: CesiumJs.Color.GREEN.withAlpha(0.5),
                    outline: true,
                    outlineColor: CesiumJs.Color.BLACK
                }
            });

            // Zoom to the polygon
            const boundingSphere = CesiumJs.BoundingSphere.fromPoints(polygonCoordinates);
            cesiumViewer.current.camera.viewBoundingSphere(boundingSphere, new CesiumJs.HeadingPitchRange(0, -0.5, boundingSphere.radius));
        }
    }, [positions, isLoaded]);

    useEffect(() => {
        // Set the loaded state when the viewer is initialized
        if (cesiumViewer.current !== null) {
            setIsLoaded(true);
        }
    }, [CesiumJs]);

    return (
        <div
            ref={cesiumContainerRef}
            id='cesium-container'
            style={{ height: '70vh', width: '60vw' }}
        />
    );
};

export default CesiumComponent;
