// @ts-nocheck
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-editable";
import EditableElementsLayer from "./layers/EditableElementsLayer";

interface MapEditableProps {
  centerLongitude: number;
  centerLatitude: number;
  zoom: number;
}
const MapEditable = ({
  centerLongitude,
  centerLatitude,
  zoom,
}: MapEditableProps) => {
  return (
    <MapContainer
      className="relative"
      center={[centerLatitude, centerLongitude]}
      zoom={zoom}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      editable
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <EditableElementsLayer />
    </MapContainer>
  );
};

export default MapEditable;
