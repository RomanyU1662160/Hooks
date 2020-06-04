import React, { useLayoutEffect, useState, useRef } from "react";

export function UseEffectLayoutExample() {
  const [style, setStyle] = useState({ width: 200, height: 200 });

  const imgRef = useRef();

  useLayoutEffect(() => {
    // GetBoundingClientRect() returns the dimension of a Dom
    console.log(imgRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }, [style]);

  const handleImageSize = (num = 10) => {
    setStyle({ width: style.width + num, height: style.height + num });
    // console.log(imgRef.current.getBoundingClientRect());
  };
  const handleResetImageSize = () => {
    setStyle({ width: 200, height: 200 });
  };

  return (
    <div>
      <div className="alert">
        <span className="float-left"> {style.width}</span>
        <span className="float-right"> {style.width}</span>
      </div>
      <img
        src="https://www.nretnil.com/avatar/LawrenceEzekielAmos.png"
        alt="Avatar "
        width={style.width}
        height={style.height}
        ref={imgRef}
      />
      <div className="alert">
        <button
          className="btn btn-info float-right"
          onClick={() => handleImageSize(10)}>
          Increase Image{" "}
        </button>

        <button
          className="btn btn-danger float-left"
          onClick={() => {
            handleImageSize(-10);
          }}>
          Decrease Image{" "}
        </button>
      </div>
      <button
        className="btn btn-outline-warning  btn-block mt-5 text-info"
        onClick={handleResetImageSize}>
        Reset
      </button>
    </div>
  );
}
