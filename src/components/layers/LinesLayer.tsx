import { Polyline } from "react-leaflet";

import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";

const LinesLayer = () => {
  const [points, setPoints] = useState<LatLngExpression[]>([[0, 0]]);
  const [numPoints, setNumPoints] = useState(2);

  useEffect(() => {
    const data: LatLngExpression[] = [
      [41.324633, 2.095257],
      [41.345833, 2.041667],
      [41.433333, 2.233333],
      [41.47444, 1.930537],
      [41.548333, 2.1075],
      [41.28, 1.976667],
    ];
    setPoints(data.slice(0, numPoints));
  }, [numPoints]);

  const limeOptions = { color: "blue", weight: 10 };

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control">
        <button
          onClick={() => setNumPoints(numPoints + 1)}
          className="bg-black text-white py-2 px-4 text-3xl hover:scale-110 "
        >
          +
        </button>
      </div>

      <Polyline pathOptions={limeOptions} positions={points} />
    </div>
  );
};

export default LinesLayer;
