import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/Form-component/Task-form"
import Todo from "./components/TodoListPage/Todo";
import NavBar from "./components/Dashboard/dashboard";
import TodayTask from "./components/TodayTaskPage/today-task";
import { BrowserRouter, Route, Redirect } from "react-router-dom";


function App() {
  const [taskList, changeTasks] = useState([]);

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
      title: "list1",
    },
    {
      id: 2,
      title: "list2",
    },
  ];

  const [isOnlyUncompletedTasks, toogleTaskType] = useState(false);



  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="todo">
            <Header />
            <div className="main-content">
              <NavBar lists={lists} toogleTaskType={toogleTaskType} isOnlyUncompletedTasks={isOnlyUncompletedTasks} />
              <Route path='/' exact>
                <Redirect to={{ pathname: '/today' }}></Redirect>
              </Route>
              <Route path='/lists/:id' exact>
                <Todo
                  tasks={taskList}
                  deleteTask={deleteTask}
                  changeConditionTask={changeConditionTask}
                  lists={lists}
                  isOnlyUncompletedTasks={isOnlyUncompletedTasks}
                />
              </Route>
              <Route path='/today' exact>
                <TodayTask
                  tasks={taskList}
                  deleteTask={deleteTask}
                  changeConditionTask={changeConditionTask}
                  lists={lists} />
              </Route>
              <TaskForm changeTasks={changeTasks} lists={lists} taskList={taskList} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
