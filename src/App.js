import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/Task-form";
import Todo from "./components/Todo";

let idCount = 1;

function App() {
  const [taskList, changeTasks] = useState([]);

  const createTask = (data) => {
    return {
      id: idCount++,
      title: data.title,
      done: false,
      due_date: data.due_date || "",
      description: data.description || "",
    };
  };

  const addNewTask = (task) => {
    const newTask = createTask(task);
    changeTasks([...taskList, newTask]);
  };

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((t) => t.id !== id);
    changeTasks(newTaskList);
  };

  const changeConditionTask = (id, done) => {
    const newTaskList = taskList.slice();
    newTaskList[id - 1].done = !done;
    changeTasks(newTaskList);
  };

  return (
    <div className="main">
      <div className="todo">
        <Header />
        <TaskForm onSubmit={addNewTask} />
        <Todo
          tasks={taskList}
          deleteTask={deleteTask}
          changeConditionTask={changeConditionTask}
        />
      </div>
    </div>
  );
}

export default App;
