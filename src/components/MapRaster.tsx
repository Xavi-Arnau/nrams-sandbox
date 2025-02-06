// @ts-nocheck
//GeoRasterLayer only tiff?
//https://www.npmjs.com/package/georaster
//https://www.npmjs.com/package/georaster-layer-for-leaflet
//https://codesandbox.io/p/sandbox/react-leaflet-georaster-yeilk?file=%2Fsrc%2FRGBGeoRaster.js%3A4%2C1-4%2C58

//Leaflet.CanvasLayer.Field for asc and tiff
//https://github.com/IHCantabria/Leaflet.CanvasLayer.Field

import { MapContainer, TileLayer } from "react-leaflet";
import FuelLayer2 from "./layers/FuelLayer2";
interface MapRasterProps {
  centerLongitude: number;
  centerLatitude: number;
  zoom: number;
}
const MapRaster = ({
  centerLongitude,
  centerLatitude,
  zoom,
}: MapRasterProps) => {
  return (
    <div>
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
        <FuelLayer2 />
      </MapContainer>
    </div>
  );
};

export default MapRaster;
