import { NavLink, useParams } from "react-router-dom";
import Checkbox from "./task-checkbox";
import "./task.css";
import { deleteTask } from "../../action";
import { useDispatch } from "react-redux";


const checkDate = (date, done) => {
  if (date) {
    date = new Date(date);
    let nowDay = new Date();
    nowDay = new Date(nowDay.getFullYear(), nowDay.getMonth(), nowDay.getDate(), 0, 0, 0, 0);
    if (nowDay >= date && done === false) {
      return "overdue-date";
    } else if (nowDay < date || done === true) {
      return "date";
    }
  }
  else {
    return "";
  }
}

const Task = ({ tasks, changeConditionTask }) => {
  const dispatch = useDispatch()
  const listId = useParams().id;

  return tasks.map((task) => {

    const url = `/lists/${task.todosListId}`
    return (
      <div id={task.id} className="task" key={`task${task.id}`}>
        <div className="info">
          <Checkbox task={task} changeConditionTask={changeConditionTask} />
          <h3 className={task.done ? "doneTitle" : ""}>
            {task.id}. {task.title}
          </h3>
          <h3 className={checkDate(task.due_date, task.done)}> {task.due_date} </h3>
          <p className={"deleteTaskButton"} onClick={() => dispatch(deleteTask(task.id))}>✖</p>
        </div>
        <p className="description">{task.description}</p>
        {!listId ? <NavLink to={url}>{task.todos_list ? task.todos_list.title : ''}</NavLink> : ''}
      </div>
    );
  });
};

export default Task;
