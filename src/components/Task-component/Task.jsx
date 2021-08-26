import { NavLink, useParams } from "react-router-dom";
import Checkbox from "./checkbox";
import "./task.css";

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

const getListTitle = (id, lists) => {
  const currentList = lists.find(l => l.id == id);
  return currentList.title;
}

const Task = ({ tasks, deleteTask, changeConditionTask, lists }) => {
  const listId = useParams().id
  return tasks.map((task) => {
    const url = `/lists/${task.listId}`
    return (
      <div id={task.id} className="task" key={`task${task.id}`}>
        <div className="info">
          <Checkbox task={task} changeConditionTask={changeConditionTask} />
          <h3 className={task.done ? "doneTitle" : ""}>
            {task.id}. {task.title}
          </h3>
          <h3 className={checkDate(task.due_date, task.done)}> {task.due_date} </h3>
          <p className={"deleteTaskButton"} onClick={() => deleteTask(task.id)}>✖</p>
        </div>
        <p className="description">{task.description}</p>
        {!listId ? <NavLink to={url}>{getListTitle(task.listId, lists)}</NavLink> : ''}
      </div>
    );
  });
};

export default Task;
