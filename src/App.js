import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/Task-form";
import Todo from "./components/Todo";
import { BrowserRouter as Router, Link } from "react-router-dom";
import NavBar from "./components/navBar";

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
      listId: data.listId || ""
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

  const lists = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Other",
    },
    {
      id: 3,
      title: "list1",
    },
    {
      id: 4,
      title: "list2",
    },

  ];

  return (
    <div className="main">
      <div className="todo">
        <Header />
        <div className="main-content">
          <NavBar lists={lists} />
            <Todo
              tasks={taskList}
              deleteTask={deleteTask}
              changeConditionTask={changeConditionTask}
              lists={lists}
            />
          <TaskForm onSubmit={addNewTask} lists={lists.slice(2)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
