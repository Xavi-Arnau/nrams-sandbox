import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestWMS from "./pages/TestWMS";
import Editable from "./pages/Editable";
import EditableGeoman from "./pages/EditableGeoman";
import { Toaster } from "@/components/ui/toaster";
import RasterTest from "./pages/RasterTest";
import GlobeTest from "./pages/GlobeTest";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testwms" element={<TestWMS />} />
            <Route path="/editable" element={<Editable />} />
            <Route path="/editablegeoman" element={<EditableGeoman />} />
            <Route path="/rastertest" element={<RasterTest />} />
            <Route path="/globe" element={<GlobeTest />} />
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
