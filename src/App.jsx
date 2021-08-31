import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import TaskForm from "./components/Form-component/task-form";
import Todo from "./components/TodoListPage/todo-list-page";
import Dashboard from "./components/Dashboard/dashboard";
import TodayTask from "./components/TodayTaskPage/today-task";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadDashboardCount, loadTask } from "./action/service/db-query";


function App() {
  const [isOnlyUncompletedTasks, toogleTaskType] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(loadDashboardCount);
    }, [dispatch])

    
  const tasks = useSelector(state => state.tasks)
  const lists = useSelector(state => state.dashboard.today)

  // console.log(useSelector(state => state))

   
  //   console.log(lists)

  

  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="todo">
            <Header />
            <div className="main-content">
              <Dashboard toogleTaskType={toogleTaskType} isOnlyUncompletedTasks={isOnlyUncompletedTasks} />
              <Route path='/' exact>
                <Redirect to={{ pathname: '/today' }}></Redirect>
              </Route>
              <Route path='/lists/:id' exact>
                <Todo
                lists={lists}
                  tasks={tasks}
                  isOnlyUncompletedTasks={isOnlyUncompletedTasks}
                />
              </Route>
              <Route path='/today' exact>
                <TodayTask
                lists={lists}
                  tasks={tasks}
                />
              </Route>
              <TaskForm 
              lists={lists}
              taskList={tasks} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
