// @ts-nocheck
//testing the leaflet-editable inside of react-leaflet structure
//https://leaflet.github.io/Leaflet.Editable/doc/api.html
//https://codesandbox.io/p/sandbox/react-leaflet-ctrl-click-7cs0u?file=%2Fsrc%2Findex.js
import L from "leaflet";
import { FeatureGroup, useMap } from "react-leaflet";
import "leaflet-editable";
import { useEffect, useRef } from "react";
import {
  Square,
  Minus,
  Circle,
  RectangleHorizontal,
  Save,
  Eraser,
} from "lucide-react";
//https://gis.stackexchange.com/questions/237171/making-a-geojson-layer-editable-with-the-leaflet-editable-plugin
//load shapes from data
const EditableElementsLayer = ({ data }) => {
  const parentMap = useMap();

  const featureGroupRef = useRef();

  useEffect(() => {
    featureGroupRef.current.clearLayers();

    let latLong = [];
    data.features.forEach(function (currentFeature) {
      currentFeature.geometry.coordinates.forEach(function (locationArray) {
        latLong.push([locationArray[1], locationArray[0]]);
      });
      //console.log(latLong);

      const polyline = L.polyline(latLong);
      featureGroupRef.current.addLayer(polyline);
      polyline.enableEdit();

      latLong = [];
    });
  }, [data, parentMap]);

  const newPolyLine = () => {
    const newShape = parentMap.editTools.startPolyline(null);
    featureGroupRef.current.addLayer(newShape);
  };
  const newCircle = () => {
    const newShape = parentMap.editTools.startCircle(null);
    featureGroupRef.current.addLayer(newShape);
  };

  const startRectangle = () => {
    const newShape = parentMap.editTools.startRectangle(null);
    featureGroupRef.current.addLayer(newShape);
  };

  const newPolygon = () => {
    const newShape = parentMap.editTools.startPolygon(null);
    featureGroupRef.current.addLayer(newShape);
  };

  const deleteAll = () => {
    featureGroupRef.current.clearLayers();
  };

  const saveAll = () => {
    const geoJSON = featureGroupRef.current.toGeoJSON();
    console.log(geoJSON);
  };

  return (
    <FeatureGroup ref={featureGroupRef}>
      <div className="leaflet-top leaflet-right">
        <div className="leaflet-control flex flex-col gap-2 bg-slate-100 p-2 rounded-xl">
          <button
            onClick={newPolyLine}
            className="bg-black text-white p-2 text-3xl hover:scale-110 rounded-xl"
          >
            <Minus />
          </button>
          <button
            onClick={newPolygon}
            className="bg-black text-white p-2 text-3xl hover:scale-110 rounded-xl"
          >
            <Square />
          </button>
          <button
            onClick={newCircle}
            className="bg-black text-white p-2 text-3xl hover:scale-110 rounded-xl"
          >
            <Circle />
          </button>
          <button
            onClick={startRectangle}
            className="bg-black text-white p-2 text-3xl hover:scale-110 rounded-xl"
          >
            <RectangleHorizontal />
          </button>
          <button
            onClick={deleteAll}
            className="bg-black text-white p-2 text-3xl hover:scale-110 rounded-xl"
          >
            <Eraser />
          </button>
          <button
            onClick={saveAll}
            className="bg-black text-white p-2 text-3xl hover:scale-110 rounded-xl"
          >
            <Save />
          </button>
        </div>
      </div>
    </FeatureGroup>
  );
};

export default EditableElementsLayer;

/**
 * featuregroup
 * https://stackoverflow.com/questions/69331770/react-leaflet-how-to-clear-a-feature-group-and-add-new-components-using-state
 */
