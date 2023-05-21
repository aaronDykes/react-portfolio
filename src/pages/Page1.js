import "../css/page/Gallery.scss";
import { BiAlignLeft } from "react-icons/bi";
import Nav from "../components/Nav";
import { useState } from "react";

import Photos from "../components/Photos";
import Images from "../images/Index2";

export default function Page2() {
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
          <Photos images={Images} />
        </div>
      </div>
    </div>
  );
}
