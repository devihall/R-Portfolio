import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
// import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  

  return (
    <div className="App">
      <Navbar
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      > </Navbar>

      <main>
        {!contactSelected ? (
          <>
            <Intro />
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
