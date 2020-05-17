import React, { Component } from "react";
import TaskList from "./Components/TaskList";
import TaskItem from "./Components/TaskItem";
import NewTask from "./Components/AddNewTask";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {}, // {name , isDone}
      tasks: [], // [{task}]
      filter: "", // filter by task name
    };
  }

  handleChangeNewTask = (e) => {
    e.preventDefault();
    this.setState({
      task: { name: e.target.value, isDone: false },
    });
  };

  handleSubmitNewTask = (e) => {
    e.preventDefault();
    const { task, tasks } = this.state;
    tasks.push(task);
    this.setState({
      task: {},
    });
  };

  handleMarkDone = (task) => {
    const { tasks } = this.state;
    const newTasks = tasks.map((item) => {
      if (item.name === task.name) item.isDone = !task.isDone;
      return item;
    });
    this.setState({
      tasks: newTasks,
    });
  };

  handleChangeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    let { tasks, filter } = this.state;
    if (filter) {
      tasks = tasks.filter((task) => task.name.includes(filter));
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <NewTask
              handleSubmitNewTask={this.handleSubmitNewTask}
              handleChangeNewTask={this.handleChangeNewTask}
            />
          </div>
          <div className="col-sm">
            <label>Danh sách công việc</label>
            {/* input filter by task name */}
            <input
              className="form-control"
              placeholder="Nhập tên công việc"
              onChange={this.handleChangeFilter}
            ></input>
            <TaskList>
              {tasks.map((task, index) => (
                <TaskItem
                  handleMarkDone={this.handleMarkDone}
                  key={index}
                  task={task}
                />
              ))}
            </TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
