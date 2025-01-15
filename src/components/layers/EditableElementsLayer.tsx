// @ts-nocheck
import { useMap } from "react-leaflet";
import "leaflet-editable";
import { useState } from "react";

const EditableElementsLayer = () => {
  const [shapes, setShapes] = useState([]);
  const parentMap = useMap();

  const newPolyLine = () => {
    parentMap.editTools.startPolyline(null);
  };

  const newPolygon = () => {
    const polygon = parentMap.editTools.startPolygon(null);
    setShapes([...shapes, polygon]);
  };
  console.log(shapes);

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control">
        <button
          onClick={newPolyLine}
          className="bg-black text-white py-2 px-4 text-3xl hover:scale-110 "
        >
          line
        </button>
        <button
          onClick={newPolygon}
          className="bg-black text-white py-2 px-4 text-3xl hover:scale-110 "
        >
          polygon
        </button>
        ;
      </div>
    </div>
  );
};

export default EditableElementsLayer;
