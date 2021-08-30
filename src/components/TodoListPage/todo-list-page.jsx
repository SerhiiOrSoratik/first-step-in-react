import Task from "../Task-component/task";
import { useParams } from "react-router-dom";

const Todo = ({ tasks, lists, isOnlyUncompletedTasks }) => {
  const listId = useParams().id;
  tasks = tasks.filter((t => t.listId === listId))
  if (isOnlyUncompletedTasks) {
    tasks = tasks.filter((t => t.done === false));
  }

  return (
    <div className="todo-list-page">
      <h1 className="caption">{lists[listId - 1].title}</h1>
      <div className="todo-list">
        <Task tasks={tasks} lists={lists} />
      </div>
    </div>
  );
};

export default Todo;
