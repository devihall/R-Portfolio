import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
// import About from './components/AboutMe/AboutMe'
import Projects from "./components/Projects/Projects";
// import Contact from "./components/ContactMe/ContactMe"




function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Projects/>
      
    </div>
  );
}

export default App;
