// @ts-nocheck
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const FuelLayer2 = () => {
  const parentMap = useMap();

  useEffect(() => {
    async function fetchData() {
      const local_tif = "./new_input.tif";
      const response = await fetch(local_tif);
      const arrayBuffer = await response.arrayBuffer();
      const georaster = await parseGeoraster(arrayBuffer);

      //console.log("georaster:", georaster);

      const layer = new GeoRasterLayer({
        georaster: georaster,
        opacity: 1,
        pixelValuesToColorFn: (values) =>
          values[0] === -9999.0
            ? null
            : `rgba(${values[0]},${values[1]},${values[2]},${values[3] / 255})`,
        resolution: 64, // optional parameter for adjusting display resolution
      });
      layer.addTo(parentMap);

      parentMap.fitBounds(layer.getBounds());
    }
    fetchData();
  }, [parentMap]);

  return <div>FuelLayer2</div>;
};

export default FuelLayer2;
