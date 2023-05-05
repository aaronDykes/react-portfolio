import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Pattern from "./pages/Pattern";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Pattern" element={<Pattern />} />
      </Routes>
    </div>
  );
}
