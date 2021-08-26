// import "./todo.css";
import Task from "../Task-component/Task";

const selectTodayTask = (tasks) => {
    const nowDay = new Date()
    const startThisDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 0, 0, 0, 0);
    const endThisDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 23, 59, 59, 59);

    const newTasks = tasks.filter(t => startThisDay.getTime() <= new Date(t.due_date).getTime() && endThisDay.getTime() >= new Date(t.due_date).getTime())
    return newTasks;
}

const TodayTask = ({tasks, deleteTask, changeConditionTask, lists}) => {
  const newTasks = selectTodayTask(tasks);
  console.log(newTasks)
  const activeTasks = newTasks.filter(t => t.done === false);
  const doneTasks = newTasks.filter(t => t.done === true);

  return (
    <div className="todo-list">
      <div>
        <h1>Active task</h1>
        <Task tasks={activeTasks} deleteTask={deleteTask} changeConditionTask={changeConditionTask} lists={lists}/>
      </div>
      <hr/>
      <div>
        <h1>Done task</h1>
        <Task tasks={doneTasks} deleteTask={deleteTask} changeConditionTask={changeConditionTask} lists={lists}/>
      </div>
    </div>
  );
};

export default TodayTask;
