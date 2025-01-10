import { GeoJSON } from "react-leaflet";
import barcelonaBarris from "../../data/barcelonaBarris.json";
import { FeatureCollection } from "geojson";

const BarrisLayer = () => {
  function style() {
    return {
      fillColor: "#FC4E2A",
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  }

  return <GeoJSON data={barcelonaBarris as FeatureCollection} style={style} />;
};

export default BarrisLayer;
