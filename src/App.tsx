import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestWMS from "./pages/TestWMS";
import Editable from "./pages/Editable";
import EditableGeoman from "./pages/EditableGeoman";
import { Toaster } from "@/components/ui/toaster";

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
          </Routes>
        </div>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
