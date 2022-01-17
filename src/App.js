import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const data = ["Home","Portfolio","Skills","Contact",];

function App() {
  return (
    <div className="App">
      <Navbar style="z-index:2" data={data}/>
      <Header/>
      <Main style="z-index: 1"/>
    </div>
  );
}

export default App;
