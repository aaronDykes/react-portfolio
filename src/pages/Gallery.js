import "../css/Gallery.css";
import Images from "./../images/PhotoIndex";

import { Link } from "react-router-dom";
import { BiAlignLeft } from "react-icons/bi";

function handleImage(Image) {
  return (
    <div key={Image._id} className="Images">
      <img
        src={Image.image}
        loading="lazy"
        alt={Image.name}
        className="Image"
      ></img>
    </div>
  );
}
export default function Gallery() {
  return (
    <div className="Gallery">
      <div className="Menu">
        <Link to="/" id="Head">
          <BiAlignLeft />
        </Link>
      </div>
      <div className="Top-Content">{Images.map((el) => handleImage(el))}</div>
    </div>
  );
}
