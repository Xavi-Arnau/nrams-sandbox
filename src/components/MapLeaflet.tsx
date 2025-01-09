/** Map component using react-leaflet https://react-leaflet.js.org/ */

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

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
  return (
    <>
      <div className="flex flex-row gap-4 py-4">
        <button
          onClick={() => setDisplayMarker(!displayMarker)}
          className={
            displayMarker
              ? "bg-red-600 text-white py-2 px-4 rounded-xl"
              : "bg-green-600 text-white py-2 px-4 rounded-xl"
          }
        >
          Markers
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
        {displayMarker ? (
          <Marker position={[centerLatitude, centerLongitude]}>
            <Popup>
              <div className="bg-red-700 text-white p-2">Our pretty marker</div>
            </Popup>
          </Marker>
        ) : null}
      </MapContainer>
    </>
  );
};

export default MapLeaflet;
