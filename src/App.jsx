import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import TaskForm from "./components/Form-component/task-form";
import Todo from "./components/TodoListPage/todo-list-page";
import Dashboard from "./components/Dashboard/dashboard";
import TodayTask from "./components/TodayTaskPage/today-task";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const [isOnlyUncompletedTasks, toogleTaskType] = useState(false);

  const tasks = useSelector(state => state.tasks)
  const lists = useSelector(state => state.lists)

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="todo">
            <Header />
            <div className="main-content">
              <Dashboard lists={lists} toogleTaskType={toogleTaskType} isOnlyUncompletedTasks={isOnlyUncompletedTasks} />
              <Route path='/' exact>
                <Redirect to={{ pathname: '/today' }}></Redirect>
              </Route>
              <Route path='/lists/:id' exact>
                <Todo
                  tasks={tasks}
                  lists={lists}
                  isOnlyUncompletedTasks={isOnlyUncompletedTasks}
                />
              </Route>
              <Route path='/today' exact>
                <TodayTask
                  tasks={tasks}
                  lists={lists}
                />
              </Route>
              <TaskForm lists={lists} taskList={tasks} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
