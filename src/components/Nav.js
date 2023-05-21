import { Link } from "react-router-dom";
import { IoReturnDownForward } from "react-icons/io5";
import "../css/component/Nav.scss";

import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import Drop from "./Drop";
import Contact from "./Contact";

export default function Nav({ clicked, setClicked }) {
  const [vert, setVertical] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className={`nav ${clicked ? "hidden" : "visible"}`}>
      <div className="n-item">
        <button id="menu-btn" onClick={() => setClicked(!clicked)}>
          <IoReturnDownForward id="menu" />
        </button>
      </div>

      <div className="n-item">
        <Link to="/">home</Link>
      </div>
      <br />
      <div className="n-item">
        <Link to="/Pattern">pattern</Link>
      </div>

      <div className="n-item gallery">
        <Link onClick={() => setVertical(!vert)} id="drop">
          gallery
        </Link>
        <RiArrowDownSLine
          onClick={() => setVertical(!vert)}
          className={`drop-btn ${!vert ? "vertical" : "horizontal"}`}
        />
      </div>
      <Drop vert={vert} />

      <div className="n-item gallery">
        <Link onClick={() => setContact(!contact)} id="drop">
          contact
        </Link>
        <RiArrowDownSLine
          onClick={() => setContact(!contact)}
          className={`drop-btn ${!contact ? "vertical" : "horizontal"}`}
        />
      </div>
      <Contact contact={contact} />
    </div>
  );
}
