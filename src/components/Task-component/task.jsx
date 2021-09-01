import { NavLink, useParams } from "react-router-dom";
import Checkbox from "./task-checkbox";
import "./task.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../action/service/db-query";


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
  const todosListId = useParams().id;
  const options = { year: "numeric", month: "numeric", day: "numeric" };

  return tasks.map((task) => {
    const url = `/lists/${task.todosListId}`
    return (
      <div style={{ display: "flex" }} key={`task${task.id}`}>
        <div id={task.id} className="task" >
          <div className="info">
            <Checkbox task={task} changeConditionTask={changeConditionTask} />
            <h3 className={task.done ? "doneTitle" : ""}>
              {task.id}. {task.title}
            </h3>
            <h3 className={checkDate(task.due_date, task.done)}> {new Date(task.due_date).toLocaleDateString("en-US", options)} </h3>
          </div>
          <p className="description">{task.description}</p>
          {!todosListId ? <NavLink to={url}>{task.todos_list ? task.todos_list.title : ''}</NavLink> : ''}
        </div>
        <p className={"deleteTaskButton"} onClick={() => dispatch(deleteTask(task.id, task.todosListId))}>✖</p>
      </div>
    );
  });
};

export default Task;
