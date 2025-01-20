// @ts-nocheck
import L from "leaflet";
import "leaflet-editable";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";

interface MapEditableRawProps {
  centerLongitude: number;
  centerLatitude: number;
  zoom: number;
}
const MapEditableRaw = ({
  centerLongitude,
  centerLatitude,
  zoom,
}: MapEditableRawProps) => {
  const [data, setData] = useState(null);

  const MAP_TILE = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );
  const mapParams: L.MapOptions = {
    center: L.latLng(centerLatitude, centerLongitude),
    zoom: zoom,
    zoomControl: false,
    layers: [MAP_TILE],
  };
  //asdsad
  useEffect(() => {
    const map = L.map("map", mapParams);
  }, []);

  const changeLayer = async (value) => {
    console.log(value);
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

      <div id="map" className="w-full h-48"></div>
    </div>
  );
};

export default MapEditableRaw;
