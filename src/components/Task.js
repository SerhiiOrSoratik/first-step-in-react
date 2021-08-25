import Checkbox from "./checkbox";
import "./task.css";

const Task = ({tasks, deleteTask, changeConditionTask}) => {

  const changeConditionTaskT = (id, done) => {
    changeConditionTask(id, done);
  }

  return tasks.map((task) => {
    return (
      <div id={task.id} className="task" key={`task${task.id}`}>
        <div className="info">
          <Checkbox task={task} changeConditionTask={changeConditionTaskT}/>
          <h3>
            {task.id}. {task.title}
          </h3>
          <h3 className="date"> {task.due_date} </h3>
          <p onClick={() => deleteTask(task.id)}>✖</p>
        </div>

        <p className="description">{task.description}</p>
      </div>
    );
  });
};

export default Task;
