import React, { useState } from "react";
import NavbarContainer from "./envAndResiv/NavbarContainer";
import { Link } from "./../util/router.js";

function Navbar(props) {
  // const auth = useAuth();
  // const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer spaced={props.spaced} color={props.color}>
      <div className="container" style={{ fontWeight: "500" }}>
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <img className="image" src={props.logo || Text} alt="Logo" />
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link className="navbar-item" to="/gallary">
              Gallary
            </Link>
            {/* <Link className="navbar-item" to="/about">
                About
              </Link> */}
            {/* <a
                className="navbar-item"
                target="_blank"
                href="https://farms.com"
                rel="noopener noreferrer"
              >
                online farms
              </a> */}
            <Link className="navbar-item" to="/news">
              News
            </Link>
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
