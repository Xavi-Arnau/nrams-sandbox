import { Marker, Popup } from "react-leaflet";
/** leaflet icon not loading fix https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-787888924 */
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
/** end fix */

interface coord {
  lat: number;
  lng: number;
}
interface MarkersLayerProps {
  markersData: coord[];
}

const MarkersLayer = ({ markersData }: MarkersLayerProps) => {
  return (
    <>
      {markersData.map((item) => (
        <Marker key={item.lat} position={[item.lat, item.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default MarkersLayer;
