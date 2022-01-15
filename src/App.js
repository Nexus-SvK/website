import "./App.css";
import Header from "./components/Header";

const data = ["Home","Portfolio","Skills","Contact",];

function App() {
  return (
    <div className="App">
      <Header navbar={data} />
      <div className="section">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default App;
