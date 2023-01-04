import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";

let header = ["About", "Products", "For Teams"];

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
