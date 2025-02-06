//import * as d3 from "d3";
import L from "leaflet";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

const FuelLayer = () => {
  const parentMap = useMap();

  /*useEffect(() => {
    async function data() {
      const test = await d3.text("./fuels.asc", function (asc) {
        var s = L.ScalarField.fromASCIIGrid(asc);
        console.log(s);

        var layer = L.canvasLayer.scalarField(s).addTo(parentMap);

        parentMap.fitBounds(layer.getBounds());
      });
      //console.log(test);
    }

    const script = document.createElement("script");
    script.src =
      "https://ihcantabria.github.io/Leaflet.CanvasLayer.Field/dist/leaflet.canvaslayer.field.js";
    script.async = true;
    script.onload = () => data();

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    async function data() {
      const test = await d3.text("./Bay_Speed.asc", function (asc) {
        const s = L.ScalarField.fromASCIIGrid(asc);
        console.log(s);

        const layer = L.canvasLayer.scalarField(s).addTo(parentMap);
        console.log(layer);

        parentMap.fitBounds(layer.getBounds());
      });
      //console.log(test);
    }

    data();
  }, []);*/

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ihcantabria.github.io/Leaflet.CanvasLayer.Field/dist/leaflet.canvaslayer.field.js";
    script.async = true;
    script.onload = () => loaded(parentMap);

    document.body.appendChild(script);
  }, []);

  const loaded = async (map) => {
    await d3.text("./fuels.asc", function (asc) {
      var s = L.ScalarField.fromASCIIGrid(asc);

      var layer = L.canvasLayer.scalarField(s).addTo(map);

      map.fitBounds(layer.getBounds());
    });
  };

  return <div>FuelLayer</div>;
};

export default FuelLayer;
