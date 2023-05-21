import "../css/page/Home.scss";
import Nav from "../components/Nav";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div id="home">
      <div className={`h-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`h-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="h-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>
        <div className="h-name">
          <h1 className="h-first">Aaron</h1>
          <h1 className="h-last">Dykes</h1>
        </div>
        <footer />
        <footer />
      </div>
    </div>
  );
}
