//@ts-nocheck
import { useRef, useEffect, useState, ChangeEvent } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { volcans } from "@/data/volcans";

type Marker = {
  lat: number;
  lng: number;
  size: number;
  color: string;
  name: string;
  type: string;
};

const GlobeTest = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [info, setInfo] = useState("");
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [markers, setMarkers] = useState<Marker[]>([
    {
      lat: 37.7749,
      lng: -122.4194,
      size: 0.5,
      color: "red",
      name: "San Francisco",
      type: "wildfires",
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      size: 0.5,
      color: "blue",
      name: "London",
      type: "floods",
    },
    {
      lat: 35.6895,
      lng: 139.6917,
      size: 0.5,
      color: "green",
      name: "Tokyo",
      type: "earthquakes",
    },
  ]);
  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = false;
      controls.autoRotateSpeed = 0.5;
    }
  }, []);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    //if all no filter @todo
    const type = e.target.value;
    setMarkers(markers.filter((item) => item.type === type));
  };

  const handlePointClick = (point) => {
    console.log(point);
    setInfo(
      point.date +
        " | " +
        point.province +
        " | Area burned: " +
        point.area_burned
    );
    setShowPopup(true);
  };
  return (
    <div className="relative" style={{ width: "100vw", height: "100vh" }}>
      <AlertDialog open={showPopup} onOpenChange={setShowPopup}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Some info</AlertDialogTitle>
            <AlertDialogDescription>{info}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="w-full absolute top-0 left-0 z-[100] flex flex-row justify-center">
        <select onChange={handleChange}>
          <option value="all">All</option>
          <option value="wildfires">Wildfires</option>
          <option value="floods">Floods</option>
          <option value="earthquakes">Earthquakes</option>
        </select>
      </div>
      <Globe
        ref={globeEl}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        pointLat="Latitude"
        pointLng="Longitude"
        pointsData={volcans}
        labelLat="Latitude"
        labelLng="Longitude"
        labelsData={volcans}
        labelText="Name"
        labelSize={0.2}
        labelColor={() => "black"}
        labelAltitude={0.05}
        labelDotRadius={0.15}
        onLabelClick={handlePointClick}
        ringLat="Latitude"
        ringLng="Longitude"
        ringsData={volcans}
        ringColor={() => "red"}
        globeTileEngineUrl={(x, y, l) =>
          `https://tile.openstreetmap.org/${l}/${x}/${y}.png`
        }
      />
    </div>
  );
};

export default GlobeTest;
