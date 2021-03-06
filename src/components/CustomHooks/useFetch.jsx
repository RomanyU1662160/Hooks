import { useEffect, useState } from "react";

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: true });
    setTimeout(
      () => [
        fetch(url)
          .then(res => res.json())
          .then(data =>
            setState({
              data: data,
              loading: false
            })
          )
      ],
      3000
    );
  }, [url]);
  return state;
};
