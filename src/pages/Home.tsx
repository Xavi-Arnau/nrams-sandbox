import MapLeaflet from "../components/MapLeaflet";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-8/12 mx-auto bg-slate-100 min-h-screen p-10">
        <MapLeaflet
          centerLongitude={2.176944}
          centerLatitude={41.3825}
          zoom={12}
        />
      </div>
    </div>
  );
};

export default Home;
