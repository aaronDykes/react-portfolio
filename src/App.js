import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Pattern from "./pages/Pattern";

import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/Pattern" element={<Pattern />} />
      </Routes>
    </div>
  );
}
