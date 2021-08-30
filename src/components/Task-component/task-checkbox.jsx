import { useDispatch } from "react-redux";
import { changeConditionTask, taskStatusUpdated } from "../../action";


const Checkbox = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <input
      type="checkbox"
      onChange={() => {
        dispatch(changeConditionTask(task.id, task.done))
        dispatch(taskStatusUpdated(task.id, task.listId, task.done, task.due_date))
      }
      }
      checked={task.done}
    />
  );
};

export default Checkbox;
