import React, { useState } from "react";

export const UseStateExample = props => {
  const [counter, setCounter] = useState(10);

  // useStateWith object
  const [{ num1, num2 }, setNums] = useState({ num1: 10, num2: 20 });

  return (
    <div>
      <p> {counter}</p>
      <button className="btn btn-info" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      {/* c = the current state */}
      <button className="btn btn-danger" onClick={() => setCounter(c => c - 1)}>
        {" "}
        -{" "}
      </button>
      <p> Object nums with useState </p>
      <p> Num 1 = {num1}</p>{" "}
      <button onClick={() => setNums(c => ({ ...c, num1: c.num1 + 1 }))}>
        Increment Number 1{" "}
      </button>
      <p> Num 2 = {num2}</p>
    </div>
  );
};
