import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UseStateExample } from "./components/useState/UseStateExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <UseStateExample></UseStateExample>
    </div>
  );
}

export default App;
