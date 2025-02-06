import MapRaster from "@/components/MapRaster";

const RasterTest = () => {
  return (
    <div className="w-full">
      <div className="md:w-8/12 mx-auto bg-slate-100 min-h-screen p-10">
        <MapRaster
          centerLongitude={2.994444}
          centerLatitude={42.1075}
          zoom={11}
        />
      </div>
    </div>
  );
};

export default RasterTest;
