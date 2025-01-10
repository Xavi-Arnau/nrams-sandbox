/** Map component using react-leaflet https://react-leaflet.js.org/ */

import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useState } from "react";
import MarkersLayer from "./layers/MarkersLayer";
import markersData from "../data/makers.json";

import BarrisLayer from "./layers/BarrisLayer";
import DistrictesLayer from "./layers/DistrictesLayer";

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
  return (
    <>
      <div className="flex flex-row gap-4 py-4">
        <button
          onClick={() => setDisplayMarker(!displayMarker)}
          className={
            displayMarker
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110"
          }
        >
          Markers
        </button>
        <button
          onClick={() => setDisplayBarris(!displayBarris)}
          className={
            displayBarris
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110"
          }
        >
          Barris
        </button>
        <button
          onClick={() => setDisplayDistrictes(!displayDistrictes)}
          className={
            displayDistrictes
              ? "bg-red-600 text-white py-2 px-4 rounded-xl hover:scale-110"
              : "bg-green-600 text-white py-2 px-4 rounded-xl hover:scale-110"
          }
        >
          Districtes
        </button>
      </div>
      <MapContainer
        center={[centerLatitude, centerLongitude]}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayMarker ? <MarkersLayer markersData={markersData} /> : null}
        {displayBarris ? <BarrisLayer /> : null}
        {displayDistrictes ? <DistrictesLayer /> : null}
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
