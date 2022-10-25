import React from "react";
import './Card.css'

const Card = ({picture, title, technologies})=>{
    return (
      
        <div className="card">
          <img src={picture} alt="project" />
          <span>{title}</span>
          <span>{technologies}</span>
          <button className="card-button">Learn More</button>
      
      </div>

        




    );
}


export default Card;