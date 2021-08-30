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

export const taskStatusUpdated = (id, listId, done) => {
    return {type: "TASK_STATUS_UPDATED", id, listId, done}
}

export const addNewTask = (listId) => {
    return {type: "ADD_NEW_TASK", listId}
} 
