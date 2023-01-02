import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "legendary ...";

  const customStyle = {
    color: "Green",
    fontSize:
      name.split(" ")[0] === "Legendary" || name.split(" ")[0] === "legendary"
        ? "56px"
        : "20px",
  };
  function welcome(name) {
    if (name) {
      return <h1 style={customStyle}>welcome, {name}</h1>;
    }
    return <h1 style={customStyle}>welcome, stranger</h1>;
  }
  return <div className="App">{welcome(name)}</div>;
}

export default App;
