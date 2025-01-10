import { GeoJSON } from "react-leaflet";
import barcelonaDistrictes from "../../data/barcelonaDistrictes.json";
import { FeatureCollection } from "geojson";

const DistrictesLayer = () => {
  return <GeoJSON data={barcelonaDistrictes as FeatureCollection} />;
};

export default DistrictesLayer;
