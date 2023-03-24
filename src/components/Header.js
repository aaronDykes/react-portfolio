import "./../css/Header.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="leftHeader">
      <div className="dropdown">
        <Link to="/" id="dropBtn">
          Menu
        </Link>
        <div className="dropdown-content">
          <nav>
            <ul id="navList">
              <li className="dropLinks">
                <Link to="/Physics">Physics</Link>
              </li>
              <li className="dropLinks">
                <Link to="/Pattern">Pattern</Link>
              </li>
              <li className="dropLinks">
                <Link to="/Fibonnaci">Fibonnaci</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default function Header() {
  return (
    <div className="header">
      <Menu />
    </div>
  );
}
