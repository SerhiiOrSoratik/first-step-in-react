import { useDispatch } from "react-redux";
import { taskStatusUpdated } from "../../action";
import { changeConditionTask } from "../../action/service/db-query";


const Checkbox = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <input
      type="checkbox"
      onChange={() => {
        dispatch(changeConditionTask(task.id, task.todosListId, task.done, task.due_date));
      }
      }
      checked={task.done}
    />
  );
};

export default Checkbox;
