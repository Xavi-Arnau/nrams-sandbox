import MapWMSLeaflet from "../components/MapWMSLeaflet";

const TestWMS = () => {
  return (
    <div className="w-full">
      <div className="md:w-8/12 mx-auto bg-slate-100 min-h-screen p-10">
        <MapWMSLeaflet
          centerLongitude={2.176944}
          centerLatitude={41.3825}
          zoom={11}
        />
      </div>
    </div>
  );
};

export default TestWMS;
