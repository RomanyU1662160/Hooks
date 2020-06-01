import React, { useState } from "react";
import { useFetch } from "../CustomHooks/useFetch";

export const FetchApiExample = () => {
  const [name, setName] = useState();
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  //   console.log("person :>> ", data);

  return (
    <div>
      <p> Fetch Api example</p>
      {loading ? " ...loading" : data.id}
    </div>
  );
};
