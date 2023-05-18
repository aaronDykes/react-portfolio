import "../css/page/Gallery.scss";
import Photos from "../components/Photos";
import { BiAlignLeft } from "react-icons/bi";
import Nav from "../components/Nav";
import { useState } from "react";

export default function Gallery() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="gallery">
      <div className={`g-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`g-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="g-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>
        <div className="photos">
          <Photos />
        </div>
      </div>
    </div>
  );
}
