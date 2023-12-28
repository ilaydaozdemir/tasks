import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const Tasks = () => {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };
  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuidv4() }]);
  };
  const completeTask = (completedTask) => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  };
  const deleteTask = (task) => () => {
    setCompletedTasks(completedTasks.filter((t) => t.id !== task.id));
  };

  console.log("tasks", tasks);
  return (
    <div>
      <div className="container">
        <div className="title">TASKS</div>
        <div className="form">
          <input
            className="text-input"
            value={taskText}
            onChange={updateTaskText}
          />

          <button className="add-button" onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className="tasks-list">
          {tasks.map((task) => {
            const { id, taskText } = task;
            return (
              <div key={id} onClick={completeTask(task)}>
                {taskText}
              </div>
            );
          })}
        </div>
      </div>
      <div className="completed-list">
        {completedTasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              <div className="title">Completed Tasks</div>
              {taskText}
              <span className="delete-task" onClick={deleteTask(task)}>
                x
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Tasks;
