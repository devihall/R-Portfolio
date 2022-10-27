import React from "react";
import './Card.css'



const Card = ({ projectPicture, title, technologies, gitHub }) => {
  return (
    <div className="card">
      {/* <img src={gitHub} alt="github icon"/> */}
      <img src={projectPicture} alt="project" />
      <span>{title}</span>
      <span>{technologies}</span>
      <button className="card-button ">Learn More</button>
    </div>
  );
};


export default Card;