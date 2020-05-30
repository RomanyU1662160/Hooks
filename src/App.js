import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UseStateExample } from "./components/useState/UseStateExample";
import { FormHook } from "./components/CustomHooks.jsx/Form";
import { UseEffectExample } from "./components/useEffect/UseEffectExample";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo float-right" alt="logo" />
      </header>
      <div className="App container">
        <div className="alert">
          {/* <UseStateExample></UseStateExample> */}
          {/* <FormHook /> */}
          <UseEffectExample />
        </div>
      </div>
    </>
  );
}

export default App;
