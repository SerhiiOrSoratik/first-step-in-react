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
    case "DELETE_TASK":
      newState = state.filter((t) => t.id !== action.id);
      return newState;

    case "TASK/LOADED":
      return action.tasks;

    case "TASK/TODAY/LOADED":
      return action.tasks;

    case "CREATE_TASK":
      const newTask1 = createTask(action.task);
      return [...state, newTask1];

    case "CHANGE_CONDITION_TASK":
      newState = state.slice();
      newState[newState.findIndex((t) => t.id === +action.answer.id)].done =
        action.answer.done;
      return newState;

    default:
      return state;
  }
};
