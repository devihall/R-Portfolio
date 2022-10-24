import React from "react";
import "./Projects.css";
import Card from "../Card/Card.js";
import ProjectOne from "../../img/project-1.png";
import ProjectTwo from "../../img/project-2.png";
import ProjectThree from "../../img/project-3.png";

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
        <div style={{ left: "38rem" }}>
          <Card
            firstProject={ProjectOne}
            title={"ZooKeepr"}
            technologies={"Node, Express, JavaScript"}
          />
        </div>

        <div style={{ top: "16rem", left:"-10rem" }}>
          <Card
            secondProject={ProjectTwo}
            title={"Note Taker App"}
            technologies={"Node, Express, JavaScript"}
          />
        </div>

        <div style={{ top: "70rem", left:"-20rem" }}>
        <Card
          thirdProject={ProjectThree}
          title={"Smart Webcam"}
          technologies={"TensorFlow, JavaScript, HTML"}
        />
        </div>

      </div>
    </div>
  );
};

export default Projects;