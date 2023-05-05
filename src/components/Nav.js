import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

import "../css/component/Nav.scss";
export default function Nav({ clicked, setClicked }) {
  return (
    <div className={`nav ${clicked ? "hidden" : "visible"}`}>
      <div className="n-item ">
        <Link to="/Pattern">Pattern</Link>
      </div>
      <div className="n-item">
        <Link to="/Gallery">Gallery</Link>
      </div>
      <div className="n-item">
        <Link to="/">Home</Link>
      </div>
      <div className="n-item-1">
        <GoArrowRight onClick={() => setClicked(!clicked)} />
      </div>
    </div>
  );
}
