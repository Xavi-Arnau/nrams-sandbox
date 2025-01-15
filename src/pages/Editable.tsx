import MapEditable from "../components/MapEditable";

const Editable = () => {
  return (
    <div className="w-full">
      <div className="md:w-8/12 mx-auto bg-slate-100 min-h-screen p-10">
        <MapEditable
          centerLongitude={2.176944}
          centerLatitude={41.3825}
          zoom={11}
        />
      </div>
    </div>
  );
};

export default Editable;
