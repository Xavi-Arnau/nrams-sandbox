import { Polyline } from "react-leaflet";

import { LatLngExpression } from "leaflet";

const LinesLayer = () => {
  const polyline: LatLngExpression[] = [
    [41.324633, 2.095257],
    [41.345833, 2.041667],
    [41.433333, 2.233333],
  ];

  const limeOptions = { color: "lime" };

  return <Polyline pathOptions={limeOptions} positions={polyline} />;
};

export default LinesLayer;
