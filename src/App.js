import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects"

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
