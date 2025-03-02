// @ts-nocheck
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet-editable";
import EditableElementsLayer from "./layers/EditableElementsLayer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useState } from "react";

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
  const [data, setData] = useState(null);

  const changeLayer = async (value) => {
    //console.log(value);
    const response = await axios.get(`/data${value}.geojson`);
    setData(response.data);
    //console.log(response.data);
  };
  return (
    <div>
      <div className="mb-6">
        <Select onValueChange={changeLayer}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Stored Layers" />
          </SelectTrigger>
          <SelectContent className="relative z-[9999]">
            <SelectItem value="1">Layer 1</SelectItem>
            <SelectItem value="2">Layer 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
        {data ? <EditableElementsLayer data={data} /> : null}
      </MapContainer>
    </div>
  );
};

export default MapEditable;
