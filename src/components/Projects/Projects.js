import React from "react";
import "./Projects.css";
import Card from "../Card/Card.js";
import ProjectOne from "../../img/project-1.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="awesome">
        <span>My awesome</span>
        <span>projects.</span>
      </div>
      <div
        className="blur projects-blur1"
        style={{ background: "#ABF1FF94" }}
      ></div>
      <div className="cards">
        <Card
          firstProject={ProjectOne}
          title={"ZooKeepr"}
          technologies={ "Node, Express, JavaScript"}
        />
      </div>
    </div>
  );
};

export default Projects;
