// @ts-nocheck
//https://codesandbox.io/p/sandbox/leaflet-geoman-394eq?file=%2Fsrc%2Fcomponents%2FGeoman.js
//https://geoman.io/docs/leaflet/getting-started/free-version

import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { MapContainer, TileLayer } from "react-leaflet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useState } from "react";
import Geoman from "./layers/Geoman";

interface MapGeomanProps {
  centerLongitude: number;
  centerLatitude: number;
  zoom: number;
}
const MapGeoman = ({
  centerLongitude,
  centerLatitude,
  zoom,
}: MapGeomanProps) => {
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
        <Geoman />
      </MapContainer>
    </div>
  );
};

export default MapGeoman;
