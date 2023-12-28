import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  return (
    <div>
      <h3>Tasks</h3>
      <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasks-list">
        {tasks.map((task) => {
          const { id, taskText } = task;
          return <div key={id}>{taskText}</div>;
        })}
      </div>
    </div>
  );
};
export default Tasks;