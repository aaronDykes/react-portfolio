import { Link } from "react-router-dom";
import { IoReturnDownForward } from "react-icons/io5";
import "../css/component/Nav.scss";
export default function Nav({ clicked, setClicked }) {
  return (
    <div className={`nav ${clicked ? "hidden" : "visible"}`}>
      <div className="n-item">
        <button onClick={() => setClicked(!clicked)}>
          <IoReturnDownForward />
        </button>
      </div>
      <div className="n-item">
        <Link to="/Pattern">Pattern</Link>
      </div>
      <div className="n-item">
        <Link to="/Gallery">Gallery</Link>
      </div>
      <div className="n-item">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
