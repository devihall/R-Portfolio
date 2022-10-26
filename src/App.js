import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
// import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

function App() {
  const [selectedOption, setSelectedOption] = useState("home");
  
  return (
    <div className="App">
      <Navbar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <main>
        {selectedOption === "home" && <Intro />}
        {selectedOption === "aboutme" && <About />}
        {selectedOption === "projects" && <Projects />}
      </main>
    </div>
  );
}

export default App;
