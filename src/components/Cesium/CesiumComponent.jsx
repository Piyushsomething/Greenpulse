import React from 'react';
import { dateToJulianDate } from './date';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export const CesiumComponent = ({
    CesiumJs,
    positions
}) => {
    const cesiumViewer = React.useRef(null);
    const cesiumContainerRef = React.useRef(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        if (cesiumViewer.current === null && cesiumContainerRef.current) {
            cesiumViewer.current = new CesiumJs.Viewer(cesiumContainerRef.current);
            cesiumViewer.current.clock.clockStep = CesiumJs.ClockStep.SYSTEM_CLOCK_MULTIPLIER;
        }
    }, []);

    React.useEffect(() => {
        if (isLoaded) return;
        if (cesiumViewer.current !== null) {
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

            setIsLoaded(true);
        }
    }, [positions, isLoaded]);

    const entities = [];
    const julianDate = dateToJulianDate(CesiumJs, new Date());

    return (
        <div
            ref={cesiumContainerRef}
            id='cesium-container'
            style={{height: '70vh', width: '80vw'}}
        />
    );
}

export default CesiumComponent;