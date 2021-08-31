const createTask = (data) => {
  return {
    id: data.id,
    title: data.title,
    done: false,
    due_date: data.due_date || "",
    description: data.description || "",
    todosListId: data.todosListId || "",
  };
};

export const reducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case "ADD_TASK":
      const newTask = createTask(action.task);
      return [...state, newTask];
    case "DELETE_TASK":
      newState = state.filter((t) => t.id !== action.id);
      return newState;
    case "TASK_STATUS_UPDATED":
      newState = state.slice();
      newState[newState.findIndex((t) => t.id === action.id)].done =
        !action.done;
      return newState;

    case "TASK/LOADED":
      return action.tasks;

    case "TASK/TODAY/LOADED":
      return action.tasks;

    case "CREATE_TASK":
      const newTask1 = createTask(action.task);
      return [...state, newTask1];
    default:
      return state;
  }
};
