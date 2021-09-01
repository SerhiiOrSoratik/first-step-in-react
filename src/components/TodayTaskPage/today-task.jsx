import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodayTask } from "../../action/service/db-query";
import Task from "../Task-component/task";

const TodayTask = ({ tasks, lists }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodayTask)
  }, [dispatch])
  if (lists !== undefined) {
    return (
      <div>
        <h1 className="caption">Today</h1>
        <div className="todo-list">
          <div>
            <Task tasks={tasks} lists={lists} />
          </div>
        </div>
      </div>
    );
  }
  else {
    return (<div><h2>oops...It looks like the server is dead...</h2></div>)
  }
};

export default TodayTask;
