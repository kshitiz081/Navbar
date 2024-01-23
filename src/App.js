import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);
  function changeShow(){
    setShow(!show);
  }
  return (
    <nav className="App">
        <a href="/">
          ABC
        </a>
        <button onClick={changeShow}>{show ? "Hide" : "Show"}</button>
        <div className={show ? "navBarExpanded" : "navBar"}>
              <a href="/home">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
        </div>
    </nav>
  );
}

export default App;
