import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Pdf from "../../assets/Resume.pdf"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand offsetPP" to="/">
        Professional Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/academics"
              className={window.location.pathname === "/academics" ? "nav-link active" : "nav-link"}
            >
              Academics
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={Pdf} target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
