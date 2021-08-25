import "./task.css";
import Task from "./Task";

const Todo = ({tasks, deleteTask, changeConditionTask}) => {
  const activeTasks = tasks.filter(t => t.done === false);
  const doneTasks = tasks.filter(t => t.done === true);

  const deleteTaskTodo = (id) => {
    deleteTask(id);
  }

  const changeConditionTaskTodo = (id, todo) => {
    changeConditionTask(id, todo);
  }

  return (
    <div>
      <div>
        <h1>Active task</h1>
        <Task tasks={activeTasks} deleteTask={deleteTaskTodo} changeConditionTask={changeConditionTaskTodo}/>
      </div>
      <hr/>
      <div>
        <h1>Done task</h1>
        <Task tasks={doneTasks} deleteTask={deleteTaskTodo} changeConditionTask={changeConditionTaskTodo}/>
      </div>
    </div>
  );
};

export default Todo;
