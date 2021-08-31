import Task from "../Task-component/task";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadTask } from "../../action/service/db-query";
import { useEffect } from "react";

const Todo = ({ tasks, lists, isOnlyUncompletedTasks }) => {
  const dispatch = useDispatch()
  const listId = useParams().id;

  useEffect(() => {
    dispatch(loadTask(listId))
    }, [dispatch, listId])

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
