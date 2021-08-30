import { useDispatch } from "react-redux";
import { changeConditionTask } from "../../action";


const Checkbox = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <input
      type="checkbox"
      onChange={() => dispatch(changeConditionTask(task.id, task.done))}
      checked={task.done}
    />
  );
};

export default Checkbox;
