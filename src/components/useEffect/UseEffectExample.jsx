import React, { useEffect } from "react";

export const UseEffectExample = () => {
  return (
    <div>
      <h3 className="text-info text-center"> UseEffect Example</h3>
      <form action="" method="get">
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
          />
        </div>
      </form>
    </div>
  );
};
