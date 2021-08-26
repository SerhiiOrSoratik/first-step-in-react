const Checkbox = ({ task, changeConditionTask }) => {
  const isDone = task.done;

  if (isDone) {
    return (
      <input
        type="checkbox"
        onChange={() => changeConditionTask(task.id, isDone)}
        checked
      />
    );
  } else {
    return (
      <input
        type="checkbox"
        onChange={() => changeConditionTask(task.id, isDone)}
      />
    );
  }
};

export default Checkbox;
