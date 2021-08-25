import "./todo.css";
import Task from "./Task";

const Todo = ({tasks, deleteTask, changeConditionTask, lists}) => {
  const activeTasks = tasks.filter(t => t.done === false);
  const doneTasks = tasks.filter(t => t.done === true);

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

export default Todo;
