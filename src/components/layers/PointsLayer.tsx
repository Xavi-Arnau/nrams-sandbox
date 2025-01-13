import { Circle } from "react-leaflet";

import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";

const PointsLayer = () => {
  const [opacity, setOpacity] = useState(0.1);
  const [increase, setIncrease] = useState(true);
  const data: LatLngExpression[] = [
    [41.324633, 2.095257],
    [41.345833, 2.041667],
    [41.433333, 2.233333],
  ];

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (opacity >= 1) {
        setIncrease(false);
      } else if (opacity <= 0) {
        setIncrease(true);
      }
      if (increase) {
        setOpacity((prev) => prev + 0.1);
      } else {
        setOpacity((prev) => prev - 0.1);
      }
    }, 100);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [opacity, increase]);

  const redOptions = {
    color: "orange",
    fillOpacity: opacity,
    opacity: opacity,
  };

  return (
    <>
      {data.map((item, index) => (
        <Circle
          key={index}
          center={item}
          pathOptions={redOptions}
          radius={2000}
        />
      ))}
    </>
  );
};

export default PointsLayer;
