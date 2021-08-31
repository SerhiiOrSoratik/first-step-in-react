import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodayTask } from "../../action/service/db-query";
import Task from "../Task-component/task";

const TodayTask =  ({ tasks, lists}) => {

  // tasks = selectTodayTask(tasks);
const dispatch = useDispatch()

   useEffect(() => {
    dispatch(loadTodayTask)
    }, [dispatch])

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
};

export default TodayTask;
