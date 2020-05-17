import React from "react";

let TaskList = (props) => {
  return (
    <div>
      <ul className="list-group">{props.children}</ul>
    </div>
  );
};

export default TaskList;
