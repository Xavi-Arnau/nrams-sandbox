import { MapContainer, WMSTileLayer } from "react-leaflet";

interface MapWMSLeafletProps {
  centerLongitude: number;
  centerLatitude: number;
  zoom: number;
}

const MapWMSLeaflet = ({
  centerLongitude,
  centerLatitude,
  zoom,
}: MapWMSLeafletProps) => {
  return (
    <MapContainer
      className="relative"
      center={[centerLatitude, centerLongitude]}
      zoom={zoom}
      scrollWheelZoom={false}
      doubleClickZoom={false}
    >
      <WMSTileLayer
        url="http://ows.mundialis.de/services/service?"
        params={{ layers: "TOPO-OSM-WMS" }}
      ></WMSTileLayer>
    </MapContainer>
  );
};

export default MapWMSLeaflet;
