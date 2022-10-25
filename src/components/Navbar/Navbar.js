import React from "react";
import "./Navbar.css";
import Resume from "./DHallRESUME2022 .pdf";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">Dévi Hall</div>
        <span>Toggle</span>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>
              About Me
            </li>
            <li>
              Projects
            </li>
            <li>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                Resumé
              </a>
            </li>
          </ul>
        </div>
      </div>
      <button className="button nav-button">Contact Me</button>
    </div>
  );
};

export default Navbar;
