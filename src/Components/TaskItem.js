import React from "react";

let TaskItem = (props) => {
  const { task, handleMarkDone } = props;
  return (
    <React.Fragment>
      <li className="list-group-item">
        {task.name}
        <span
          onClick={() => 
            handleMarkDone(task)
          }
          className="badge badge-secondary"
        >
          {task.isDone ? `done` : `doing`}
        </span>
      </li>
    </React.Fragment>
  );
};

export default TaskItem;
