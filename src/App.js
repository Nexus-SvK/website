import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

const data = ["Home", "Portfolio", "Skills", "Contact"];

function App() {
  return (
    <div className="App">
      <Navbar data={data} />
    </div>
  );
}

export default App;
