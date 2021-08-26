import "./todo.css";
import Task from "../Task-component/Task";
import { useParams } from "react-router-dom";

const Todo = ({ tasks, deleteTask, changeConditionTask, lists }) => {
  const listId = useParams().id;
  if (listId != 1) {
    tasks = tasks.filter((t => t.listId == listId))
  }
  const activeTasks = tasks.filter(t => t.done === false);
  const doneTasks = tasks.filter(t => t.done === true);

  return (
    <div className="todo-list">
      <h1>{lists[listId - 1].title}</h1>
      <div>
        <h1>Active task</h1>
        <Task tasks={activeTasks} deleteTask={deleteTask} changeConditionTask={changeConditionTask} lists={lists} />
      </div>
      <hr />
      <div>
        <h1>Done task</h1>
        <Task tasks={doneTasks} deleteTask={deleteTask} changeConditionTask={changeConditionTask} lists={lists} />
      </div>
    </div>
  );
};

export default Todo;
