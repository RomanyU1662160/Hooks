import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ data: data, loading: false }));
  }, [url]);
  console.log(state);
  return state;
};
