import React, { useState } from "react";
import "./App.css";
import { TaskType, TodoList } from "./components/TodoList";

export type FilterValueType = "All" | "Completed" | "Active";

function App() {
  let [tasks, setTask] = useState<Array<TaskType>>([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
  ]);

  function removeTask(id: number) {
    let filtredTasks = tasks.filter((t) => t.id !== id);
    setTask(filtredTasks);
  }

  return (
    <div className="App">
      <TodoList title="What to read?" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
