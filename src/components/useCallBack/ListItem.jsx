import React from "react";

export function ListItem({ item }) {
  return (
    <div>
      <div className="card m-1">
        <div className="card-header">
          <div className="card-title"> {item.name}</div>
        </div>
      </div>
    </div>
  );
}
