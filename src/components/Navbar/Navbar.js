import React from "react";
import "./Navbar.css";
import Resume from "./DHallRESUME2022 .pdf";


const Navbar = (props) => {
  const { selectedOption, setSelectedOption } = props;
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
            <li onClick={() => setSelectedOption("aboutme")}>About Me</li>
            <li onClick={() => setSelectedOption("projects")}>Projects</li>
            <li><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
          </ul>
        </div>
      </div>
      <button
        className="button nav-button"
        onClick={() => setSelectedOption("contact")}>
        Contact Me
      </button>
    </div>
  );
};

export default Navbar;
