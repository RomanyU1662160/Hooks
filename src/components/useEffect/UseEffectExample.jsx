import React, { useEffect, useState } from "react";
import { useForm } from "../CustomHooks/useForm";

export const UseEffectExample = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });
  const { email, password, firstName, lastName } = values;
  const [show, setShow] = useState(true);
  const [xPosition, setXPosition] = useState();
  const [yPosition, setYPosition] = useState();

  const showMousePosition = e => {
    setXPosition(e.screenX);
    setYPosition(e.screenY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", showMousePosition);

    return () => {
      window.removeEventListener("mousemove", showMousePosition);
    };
  }, [show]);
  return (
    <div>
      <div className="alert">
        <h3>Mouse X position = {xPosition}</h3>
        <h3>Mouse Y position= {yPosition}</h3>
      </div>
      <div className="alert">
        <button className="btn btn-info" onClick={() => setShow(!show)}>
          Toggle Show
        </button>
        {show && <div> Show </div>}
      </div>
      <form action="" method="get">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={firstName}
            placeholder="first name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={lastName}
            placeholder="first name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};
