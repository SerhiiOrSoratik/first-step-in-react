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

export const taskStatusUpdated = (id, listId, done, due_date) => {
    return {type: "TASK_STATUS_UPDATED", id, listId, done, due_date}
}

export const addNewTask = (listId, due_date) => {
    return {type: "ADD_NEW_TASK", listId, due_date}
} 

