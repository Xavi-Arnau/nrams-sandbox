/** Map component using react-leaflet https://react-leaflet.js.org/ */

/**Ideas
 * -Step by step
 * -Progress with a timer
 */

import { MapContainer, TileLayer } from "react-leaflet";
import { MapPin, Grid2x2, Grid3x3, Dot, Minus, Map } from "lucide-react";

import "leaflet/dist/leaflet.css";

import { useState } from "react";
import MarkersLayer from "./layers/MarkersLayer";
import markersData from "../data/makers.json";

import BarrisLayer from "./layers/BarrisLayer";
import DistrictesLayer from "./layers/DistrictesLayer";
import PointsLayer from "./layers/PointsLayer";
import LinesLayer from "./layers/LinesLayer";
import MiniMapLayer from "./layers/MiniMapLayer";

interface MapLeafletProps {
  centerLongitude: number;
  centerLatitude: number;
  zoom: number;
}
const MapLeaflet = ({
  centerLongitude,
  centerLatitude,
  zoom,
}: MapLeafletProps) => {
  const [displayMarker, setDisplayMarker] = useState(false);
  const [displayBarris, setDisplayBarris] = useState(false);
  const [displayDistrictes, setDisplayDistrictes] = useState(false);
  const [displayPoints, setDisplayPoints] = useState(false);
  const [displayLines, setDisplayLines] = useState(false);
  const [displayMiniMap, setDisplayMiniMap] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 py-4">
        <button
          onClick={() => setDisplayMarker(!displayMarker)}
          className={
            displayMarker
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
          }
        >
          <MapPin />
          Markers
        </button>

        <button
          onClick={() => setDisplayDistrictes(!displayDistrictes)}
          className={
            displayDistrictes
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
          }
        >
          <Grid2x2 />
          Districtes GeoJSON
        </button>
        <button
          onClick={() => setDisplayBarris(!displayBarris)}
          className={
            displayBarris
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
          }
        >
          <Grid3x3 />
          Barris GeoJSON
        </button>
        <button
          onClick={() => setDisplayPoints(!displayPoints)}
          className={
            displayPoints
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
          }
        >
          <Dot />
          Points
        </button>
        <button
          onClick={() => setDisplayLines(!displayLines)}
          className={
            displayLines
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
          }
        >
          <Minus />
          Lines
        </button>
        <button
          onClick={() => setDisplayMiniMap(!displayMiniMap)}
          className={
            displayMiniMap
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110 flex gap-2"
          }
        >
          <Map />
          MiniMap
        </button>
      </div>
      <MapContainer
        className="relative"
        center={[centerLatitude, centerLongitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayMarker ? <MarkersLayer markersData={markersData} /> : null}
        {displayBarris ? <BarrisLayer /> : null}
        {displayDistrictes ? <DistrictesLayer /> : null}
        {displayPoints ? <PointsLayer /> : null}
        {displayLines ? <LinesLayer /> : null}
        {displayMiniMap ? (
          <MiniMapLayer position={"topright"} zoom={0} />
        ) : null}
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
