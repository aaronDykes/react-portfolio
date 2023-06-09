import Triangle from "../components/Triangle";
import Rectangle from "../components/Rectangle";
import Diamond from "../components/Diamond";
import Nav from "../components/Nav";

import "../css/page/Pattern.scss";
import { useState } from "react";
import { BiAlignLeft } from "react-icons/bi";

export default function Pattern() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="pattern">
      <div className={`p-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>

      <div className={`p-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="p-head" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>

        <div className="patterns">
          <div className="pat">
            <Triangle />
          </div>
          <div className="pat">
            <Rectangle />
          </div>
          <div className="pat">
            <Diamond />
          </div>
        </div>

        <footer />
        <footer />
      </div>
    </div>
  );
}
