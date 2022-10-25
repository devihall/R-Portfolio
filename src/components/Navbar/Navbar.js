import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const { projectsSelected, setProjectsSelected } = props;
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">
          <a data-testid="link" href="/">
            Dévi Hall
          </a>
        </div>
        <span>Toggle</span>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>About Me</li>
            <li onClick={() => setProjectsSelected(true)}>Projects</li>
            <li>Resume</li>
          </ul>
        </div>
      </div>
      <button className="button nav-button">Contact Me</button>
    </div>
  );
};

export default Navbar;
