import { Polyline, useMap } from "react-leaflet";

import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { dataLines } from "../../data/dataLines";

const LinesLayer = () => {
  const [points, setPoints] = useState<LatLngExpression[]>([[0, 0]]);
  const [numPoints, setNumPoints] = useState(2);
  const map = useMap();

  useEffect(() => {
    map.setZoom(10);
  }, [map]);

  useEffect(() => {
    setPoints(dataLines.slice(0, numPoints));
  }, [numPoints]);

  const limeOptions = { color: "blue", weight: 10 };

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control">
        <button
          onClick={() => setNumPoints(Math.max(numPoints - 1, 0))}
          className="bg-black text-white py-2 px-4 text-3xl hover:scale-110 "
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() =>
            setNumPoints(Math.min(numPoints + 1, dataLines.length))
          }
          className="bg-black text-white py-2 px-4 text-3xl hover:scale-110 "
        >
          <ChevronRight />
        </button>
      </div>

      <Polyline pathOptions={limeOptions} positions={points} />
    </div>
  );
};

export default LinesLayer;
