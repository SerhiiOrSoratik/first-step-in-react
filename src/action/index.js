export const addTask = (task) => {
  return { type: "ADD_TASK", task };
};

export const deleteTask = (id) => {
    console.log('ok')
  return { type: "DELETE_TASK", id };
};

export const changeConditionTask = (id, done) => {
  return { type: "CHANGE_CONDITION_TASK", id, done};
}
