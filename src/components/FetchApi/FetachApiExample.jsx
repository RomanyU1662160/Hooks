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
      {loading ? (
        <>
          <div class="spinner-border text-info" role="status">
            <div class="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        data.id
      )}
    </div>
  );
};
