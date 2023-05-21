import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Pattern from "./pages/Pattern";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageOne" element={<Page1 />} />
        <Route path="/PageTwo" element={<Page2 />} />
        <Route path="/PageThree" element={<Page3 />} />
        <Route path="/Pattern" element={<Pattern />} />
      </Routes>
    </div>
  );
}
