import React, { useRef, useEffect } from "react";

export const UseRefExample = () => {
  const hourInput = useRef(null);
  const minutesInput = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // GetBoundingClientRect() returns the dimension of a Dom
    console.log("image Size  :>> ", imgRef.current.getBoundingClientRect());
  }, [imgRef]);

  const handleFocus = e => {
    console.log(e.target.value > 10);
    e.target.value > 20
      ? minutesInput.current.focus()
      : hourInput.current.focus();
  };
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name"> First Name</label>
        <input
          type="number"
          ref={hourInput}
          className="form-control col-md-6"
          placeholder="
          H "
          onChange={handleFocus}
        />
        <input
          type="number"
          ref={minutesInput}
          className="form-control col-md-6"
          placeholder="M "
        />
        <img
          ref={imgRef}
          src="https://www.nretnil.com/avatar/LawrenceEzekielAmos.png"
          alt=""
        />
        <button className="btn btn-info" onClick={handleFocus}>
          Focus the input{" "}
        </button>
      </div>
    </div>
  );
};
