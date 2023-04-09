import React from 'react';
import logo from "../assets/icons/logo.svg";
import "../assets/styles/App.css"
import { Link } from "react-router-dom";
import { useCounter } from '../store/counter';

function App() {
  const [counter, counterAction] = useCounter();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={`about`}>About</Link>
        <h1>{counter.counter}</h1>
        <button onClick={() => counterAction({type: 'add', payload: 1})}>Increment</button>
        <button onClick={() => counterAction({type: 'minus', payload: 1})}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
