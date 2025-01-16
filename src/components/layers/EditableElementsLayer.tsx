// @ts-nocheck
//testing the leaflet-editable inside of react-leaflet structure
//https://leaflet.github.io/Leaflet.Editable/doc/api.html
//https://codesandbox.io/p/sandbox/react-leaflet-ctrl-click-7cs0u?file=%2Fsrc%2Findex.js
import { useMap } from "react-leaflet";
import "leaflet-editable";
import { useState } from "react";
import { Square, Minus, Circle, RectangleHorizontal } from "lucide-react";

const EditableElementsLayer = () => {
  const [shapes, setShapes] = useState([]);
  const parentMap = useMap();

  const newPolyLine = () => {
    parentMap.editTools.startPolyline(null);
  };
  const newCircle = () => {
    parentMap.editTools.startCircle(null);
  };

  const startRectangle = () => {
    parentMap.editTools.startRectangle(null);
  };

  const newPolygon = () => {
    const polygon = parentMap.editTools.startPolygon(null);
    setShapes([...shapes, polygon]);
  };
  console.log(shapes);

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control flex flex-col gap-2">
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
      </div>
    </div>
  );
};

export default EditableElementsLayer;
