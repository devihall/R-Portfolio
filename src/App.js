import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
// import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

function App() {
  const [projectsSelected, setProjectsSelected] = useState(false);
  
  

  return (
    <div className="App">
      <Navbar
        projectsSelected={projectsSelected}
        setProjectsSelected={setProjectsSelected}>
      
      </Navbar>

      <main>
        {!projectsSelected ? (
          <>
            <Intro />
          </>
        ) : (
          <Projects></Projects>
        )}

        
      </main>
    </div>
  );
}

export default App;
