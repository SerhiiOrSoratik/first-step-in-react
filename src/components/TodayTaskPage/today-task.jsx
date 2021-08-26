// import "./todo.css";
import Task from "../Task-component/Task";

const selectTodayTask = (tasks) => {
    const nowDay = new Date()
    const endThisDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 59);

    const newTasks = tasks.filter(t => endThisDay.getTime() >= new Date(t.due_date).getTime())
    return newTasks;
}

const TodayTask = ({tasks, deleteTask, changeConditionTask, lists}) => {
    tasks = selectTodayTask(tasks);
    tasks = tasks.filter((t => t.done == false));

  return (
    <div className="todo-list"> 
      <h1>Today</h1>
      <div>
        <Task tasks={tasks} deleteTask={deleteTask} changeConditionTask={changeConditionTask} lists={lists} />
      </div>
    </div>
  );
};

export default TodayTask;
