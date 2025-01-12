import { Circle } from "react-leaflet";

import { LatLngExpression } from "leaflet";

const PointsLayer = () => {
  const center: LatLngExpression = [41.390611969954676, 2.18345134700301];

  const redOptions = { color: "red" };

  return <Circle center={center} pathOptions={redOptions} radius={200} />;
};

export default PointsLayer;
