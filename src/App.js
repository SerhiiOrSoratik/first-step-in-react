import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/Task-form";
import Todo from "./components/Todo";

let idCount = 1;

function App() {
  const createTask = (data) => {
    return {
      id: idCount++,
      title: data.title,
      done: false,
      due_date: data.due_date || "",
      description: data.description || "",
    };
  };

  const [taskList, addTask] = useState([]);

  const addNewTask = (task) => {
    const newTask = createTask(task);
    addTask([...taskList, newTask]);
  };

  return (
    <div className="main">
      <div className="todo">
        <Header />
        <TaskForm onSubmit={addNewTask} />
        <Todo tasks={taskList} />
      </div>
    </div>
  );
}

export default App;
