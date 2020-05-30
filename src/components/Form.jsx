import React, { useState } from "react";
import { useForm } from "./CustomHooks/useForm";

export const FormHook = props => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div>
      <form action="" method="get">
        {values.email}
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};
