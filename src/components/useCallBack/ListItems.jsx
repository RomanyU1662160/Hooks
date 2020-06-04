import React, { useState, useCallback, useEffect } from "react";
import { ListItem } from "./ListItem";

export function ListItems(props) {
  const [list, setList] = useState(props.items);
  const [newItem, setnewItem] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [list]);

  const addToList = item => {
    setList([...list, item]);
  };
  useCallback(() => {
    setList(...list, [newItem]);

    console.log("Callback called");
  }, [list]);

  return (
    <div>
      <span> Rendered : {count} times </span>
      <h3> List of items </h3>

      <div className="alert">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={e =>
              setnewItem({ id: 6, name: e.target.value, status: false })
            }
          />
          <button
            className="btn btn-info float-right"
            onClick={() => addToList(newItem)}>
            Add{" "}
          </button>
        </div>
      </div>
      <div className="alert">
        {list.map(item => (
          <ListItem item={item} key={item.id}></ListItem>
        ))}
      </div>
    </div>
  );
}
