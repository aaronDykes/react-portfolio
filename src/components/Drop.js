import { Link } from "react-router-dom";
import "../css/component/Drop.scss";

export default function Nav({ vert }) {
  return (
    <div className={`drop-content-${vert ? "visible" : "hidden"}`}>
      <div className="page">
        <Link to="/one">one</Link>
      </div>
      <div className="page">
        <Link to="/two">two</Link>
      </div>
      <div className="page">
        <Link to="/three">three</Link>
      </div>
    </div>
  );
}
