import { useRef, useEffect, useState, ChangeEvent } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";

type Marker = {
  lat: number;
  lng: number;
  size: number;
  color: string;
  name: string;
  type: string;
};

const GlobeTest = () => {
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
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  }, []);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    //if all no filter @todo
    const type = e.target.value;
    setMarkers(markers.filter((item) => item.type === type));
  };
  return (
    <div className="relative" style={{ width: "100vw", height: "100vh" }}>
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
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude="size"
        pointLabel="name"
      />
    </div>
  );
};

export default GlobeTest;
