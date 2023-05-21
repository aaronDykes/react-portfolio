import { Link } from "react-router-dom";
import "../css/component/Drop.scss";

export default function Nav({ contact }) {
  return (
    <div className={`drop-content-${contact ? "visible" : "hidden"}`}>
      <div className="page">
        <a href="mailto:aaron.dykes99@gmail.com">email</a>
      </div>
      <div className="page">
        <Link to="https://github.com/aaronDykes" target="_blank">
          github
        </Link>
      </div>
      <div className="page">
        <h2>613-447-7909</h2>
      </div>
    </div>
  );
}
