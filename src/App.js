// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Componets/Home/Home.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path={'/'} render={() => <Home/>}/>
      </BrowserRouter>
    </div>
  );
}


export default App;
