import { useLeafletContext } from "@react-leaflet/core";
import { useEventHandlers } from "@react-leaflet/core";
import { LeafletMouseEvent, Map } from "leaflet";
import { useCallback, useMemo, useState } from "react";
import { Rectangle, useMap, useMapEvent } from "react-leaflet";

const BOUNDS_STYLE = { weight: 1 };

interface MinimapBoundsProps {
  parentMap: Map;
  zoom: number;
}

function MinimapBounds({ parentMap, zoom }: MinimapBoundsProps) {
  const minimap = useMap();

  // Clicking a point on the minimap sets the parent's map center
  const onClick = useCallback(
    (e: LeafletMouseEvent) => {
      console.log(e);

      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvent("click", onClick);

  // Keep track of bounds in state to trigger renders
  const [bounds, setBounds] = useState(parentMap.getBounds());

  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    // Update the minimap's view to match the parent map's center and zoom
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  // Listen to events on the parent map
  const handlers = useMemo(
    () => ({ move: onChange, zoom: onChange }),
    [onChange]
  );
  //issue with evenhandlers and context
  //https://stackoverflow.com/questions/70730390/property-context-is-missing-in-type-instance-any-but-required-in-type
  const context = useLeafletContext();
  useEventHandlers({ instance: parentMap, context }, handlers);

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

export default MinimapBounds;
