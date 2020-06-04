import React from "react";
import { ListItems } from "./ListItems";

export const UseCallBackExample = () => {
  const items = [
    { id: 1, name: "learn React", status: true },
    { id: 2, name: "learn JavaScript", status: true },
    { id: 3, name: "learn Laravel", status: true },
    { id: 4, name: "learn Node.js", status: true }
  ];

  const memoList 
  return (
    <div>
      <h3 className="text-info"> UseCallBack Hook</h3>
      <p>
        Pass an inline callback and an array of dependencies. useCallback will
        return a memoized version of the callback that only changes if one of
        the dependencies has changed. This is useful when passing callbacks to
        optimized child components that rely on reference equality to prevent
        unnecessary renders (e.g. shouldComponentUpdate).
      </p>
      <ListItems items={items}></ListItems>
    </div>
  );
};
