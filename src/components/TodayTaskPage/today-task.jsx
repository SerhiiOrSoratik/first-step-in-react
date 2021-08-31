import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTodayTask } from "../../action/service/db-query";
import Task from "../Task-component/task";

const selectTodayTask = (tasks) => {

  const nowDay = new Date()
  const endThisDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 59);
  const newTasks = tasks.filter(t => endThisDay.getTime() >= new Date(t.due_date).getTime() && t.done === false)
  return newTasks;
}

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
