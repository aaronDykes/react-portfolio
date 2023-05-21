import "../css/page/Gallery.scss";
import { BiAlignLeft } from "react-icons/bi";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";

import Photos from "../components/Photos";
import Images from "../assets/images/Index3";

export default function Page2()
{
  const [clicked, setClicked] = useState(false);
  const [photos, setPhotos] = useState(null);

  useEffect(() =>
  {
    setPhotos(<Photos images={Images} />);
  }, []);


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
          {photos}
        </div>
      </div>
    </div>
  );
}
