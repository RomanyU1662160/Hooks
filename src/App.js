import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { UseStateExample } from "./components/useState/UseStateExample";
import { FormHook } from "./components/Form";
import { UseEffectExample } from "./components/useEffect/UseEffectExample";
import { FetchApiExample } from "./components/FetchApi/FetachApiExample";
import { UseRefExample } from "./components/useRef/UseRefExample";
import { UseEffectLayoutExample } from "./components/useEffectLayout/UseEffectLayoutExample";
import { ListItems } from "./components/useCallBack/ListItems";
import { UseCallBackExample } from "./components/useCallBack/UseCallBackExample";

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
          {/* <UseEffectExample /> */}
          {/* <FetchApiExample /> */}
          {/* <UseRefExample></UseRefExample> */}
          {/* <UseEffectLayoutExample></UseEffectLayoutExample> */}
          <UseCallBackExample> </UseCallBackExample>
        </div>
      </div>
    </>
  );
}

export default App;
