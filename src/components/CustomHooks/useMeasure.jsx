import { useState, useLayoutEffect } from "react";

export const useMeasure = ref => {
  console.log("reF:: :>> ", ref);
  const [style, setStyle] = useState({ width: "", height: "" });
  const measures = ref.current.getBoundingClientRect();
  console.log(measures);
  return style;
};
