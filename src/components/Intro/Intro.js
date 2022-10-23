import React from "react";
import './Intro.css'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'

const Intro = ()=>{
return (
  <div className="intro">
    <div className="intro-left">
      <div className="intro-name">
        <span>Hi! I'm</span>
        <span>Dévi !</span>
        <span>I develop software and the web.</span>
      </div>
      <img src={GitHub} alt="GitHub icon" />
    </div>
    <div className="intro-right">I am the right side</div>
  </div>
);
}

export default Intro;