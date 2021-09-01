export const taskStatusUpdated = (id, todosListId, done, due_date) => {
  return {type: "TASK_STATUS_UPDATED", id, todosListId, done, due_date}
}

export const addNewTask = (todosListId, due_date) => {
    return {type: "ADD_NEW_TASK", todosListId, due_date}
} 

