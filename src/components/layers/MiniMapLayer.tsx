import { useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MinimapBounds from "./MiniMapBounds";

// Classes used by Leaflet to position controls
interface positions {
  bottomleft: string;
  bottomright: string;
  topleft: string;
  topright: string;
}
const POSITION_CLASSES: positions = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
};

interface MiniMapLayerProps {
  position: string;
  zoom: number;
}

function MiniMapLayer({ position, zoom }: MiniMapLayerProps) {
  const parentMap = useMap();
  const mapZoom = zoom || 0;

  // Memoize the minimap so it's not affected by position changes
  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={mapZoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
      </MapContainer>
    ),
    [parentMap, mapZoom]
  );

  const positionClass =
    (position && POSITION_CLASSES[position as keyof positions]) ||
    POSITION_CLASSES.topright;
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
}

export default MiniMapLayer;
