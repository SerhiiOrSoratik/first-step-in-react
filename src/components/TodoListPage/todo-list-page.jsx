import Task from "../Task-component/task";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadTask } from "../../action/service/db-query";
import { useEffect } from "react";

const Todo = ({ lists, tasks, isOnlyUncompletedTasks }) => {

  const listId = useParams().id;
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadTask(listId))
  }, [dispatch, listId])

  if (isOnlyUncompletedTasks) {
    tasks = tasks.filter((t => t.done === false));
  }
  if (lists !== undefined) {
    return (
      <div>
        <h1 className="caption">{lists[lists.findIndex((l) => l.id === +listId)].title}</h1>
        <div className="todo-list">
          <Task tasks={tasks} lists={lists} />
        </div>
      </div>
    );
  }
  else {
    return (<div><h2>oops...It looks like the server is dead...</h2></div>)
  }
};

export default Todo;
