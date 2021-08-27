const Checkbox = ({ task, changeConditionTask }) => {
  const isDone = task.done;

  return (
    <input
      type="checkbox"
      onChange={() => changeConditionTask(task.id, isDone)}
      checked={isDone}
    />
  );
};

export default Checkbox;
