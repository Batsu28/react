import logo from './logo.svg';
import './App.css';

function App() {
  function legendary(){
    const hoho = document.getElementById("hoho");

    const fStyle = {
      color: "green",
      fontSize: "50px"
    }

    const style1 = {
      color: "red",
      fontSize: "10px"
    }

    if(hoho.includes("legendary")){
      return fStyle; 
    }else {
      return style1;
    }
  }

  return (
    <div className="App">
      <h1 id="hoho" style={legendary()} >legendary halo im uncle roger</h1>
    </div>
  );
}

export default App;
