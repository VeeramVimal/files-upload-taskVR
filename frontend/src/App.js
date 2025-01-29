import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
