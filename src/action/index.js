export const addTask = (task) => {
  return { type: "ADD_TASK", task };
};

export const deleteTask = (id) => {
  return { type: "DELETE_TASK", id };
};

export const changeConditionTask = (id) => {
  return { type: "CHANGE_CONDITION_TASK", id };
}
