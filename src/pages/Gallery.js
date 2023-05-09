import "../css/page/Gallery.scss";
import Images from "./../images/PhotoIndex";
import { BiAlignLeft } from "react-icons/bi";
import Nav from "../components/Nav";
import { useState } from "react";

function handleImage(Image) {
  return (
    <div key={Image._id} className="images">
      <img
        src={Image.image}
        loading="eager"
        alt={Image.name}
        className="image"
      ></img>
    </div>
  );
}

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
        <div className="photos">{Images.map((el) => handleImage(el))}</div>
      </div>
    </div>
  );
}
