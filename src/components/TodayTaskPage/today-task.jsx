import Task from "../Task-component/Task";
import "./today-task-page.css";
const selectTodayTask = (tasks) => {
  const nowDay = new Date()
  const endThisDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 59);

  const newTasks = tasks.filter(t => endThisDay.getTime() >= new Date(t.due_date).getTime())
  return newTasks;
}

const TodayTask = ({ tasks, deleteTask, changeConditionTask, lists }) => {
  tasks = selectTodayTask(tasks);
  tasks = tasks.filter((t => t.done == false));

  return (
    <div>
      <h1 className="caption">Today</h1>
      <div className="todo-list">

        <div>
          <Task tasks={tasks} deleteTask={deleteTask} changeConditionTask={changeConditionTask} lists={lists} />
        </div>
      </div>
    </div>
  );
};

export default TodayTask;
