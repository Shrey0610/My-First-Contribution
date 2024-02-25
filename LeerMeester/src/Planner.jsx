import React, { useState } from "react";
import "./Planner.css";

function Planner() {
  const [tasks, setTasks] = useState({
    todo: ["Get groceries", "Feed the dogs", "Mow the lawn"],
    doing: ["Binge 80 hours of Game of Thrones"],
    done: ["Watch video of a man raising a grocery store lobster as a pet"]
  });

  const handleDragStart = (e, taskContent, lane) => {
    e.dataTransfer.setData("taskContent", taskContent);
    e.dataTransfer.setData("lane", lane);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (lane) => (e) => {
    e.preventDefault();
    const taskContent = e.dataTransfer.getData("taskContent");
    const sourceLane = e.dataTransfer.getData("lane");

    if (sourceLane !== lane) {
      const updatedTasks = { ...tasks };
      updatedTasks[lane] = [...updatedTasks[lane], taskContent];

      // Remove the task from the previous lane
      updatedTasks[sourceLane] = updatedTasks[sourceLane].filter(
        (task) => task !== taskContent
      );

      setTasks(updatedTasks);
    }
  };

  const handleAddTask = (lane) => {
    const newTask = prompt("Enter new task:");
    if (newTask) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [lane]: [...prevTasks[lane], newTask]
      }));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
    <h1>Here you can use a kanban</h1>
      <div className="board">
        <div className="lanes">
          {Object.keys(tasks).map((lane) => (
            <div
              key={lane}
              className="swim-lane"
              onDrop={handleDrop(lane)}
              onDragOver={handleDragOver}
            >
              <h3 className="heading">{lane.toUpperCase()}</h3>
              {tasks[lane].map((task, index) => (
                <p
                  key={index}
                  className="task"
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, task, lane)}
                >
                  {task}
                </p>
              ))}
              <button onClick={() => handleAddTask(lane)}>Add Task</button>
            </div>
          ))}
        </div>
      </div>
    </header>
    </div>
  );
}

export default Planner;
