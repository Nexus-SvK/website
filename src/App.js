import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const data = ["Home", "Portfolio", "Skills", "Contact"];

function App() {
  return (
    <div className="App">
      <Header navbar={data}/>
      {/* <Navbar data={data} /> */}
    </div>
  );
}

export default App;
