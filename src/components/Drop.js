import { Link } from "react-router-dom";
import "../css/component/Drop.scss";

export default function Nav({ vert }) {
  return (
    <div className={`drop-content-${vert ? "visible" : "hidden"}`}>
      <div className="page">
        <Link to="/PageOne">one</Link>
      </div>
      <div className="page">
        <Link to="/PageTwo">two</Link>
      </div>
      <div className="page">
        <Link to="/PageThree">three</Link>
      </div>
    </div>
  );
}
