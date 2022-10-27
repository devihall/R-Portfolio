import React from "react";
import './Intro.css'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import introPic from '../../img/intro-pic.png'

const Intro = ()=>{
  
return (
  <div className="intro">
    <div className="intro-left">
      <div className="intro-name">
        <span>Hi ! I'm</span>
        <span>Dévi Hall </span>
        <span>I develop software and the web.</span>
      </div>
      <div className="intro-icons">
        <a href="https://github.com/devihall" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="GitHub icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/devihall/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn icon" />
        </a>
      </div>
    </div>
    <div className="intro-right">
      <img className="intro-pic" src={introPic} alt="MERN logos"></img>
      <div className="orange-blur"></div>
      <div className="blue-blur"></div>
    </div>
  </div>
);
}

export default Intro;