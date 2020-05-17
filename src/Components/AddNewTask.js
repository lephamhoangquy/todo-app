import React from "react";

let NewTask = (props) => {
  const { handleChangeNewTask, handleSubmitNewTask } = props;
  return (
    <form onSubmit={(e) => handleSubmitNewTask(e)}>
      <div className="form-group">
        <label>Tên công việc</label>
        <input
          onChange={(e) => handleChangeNewTask(e)}
          name="task"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Thêm
      </button>
    </form>
  );
};

export default NewTask;
