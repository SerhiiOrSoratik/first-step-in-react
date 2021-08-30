let idCount = 1;

const createTask = (data) => {
    return {
      id: idCount++,
      title: data.title,
      done: false,
      due_date: data.due_date || "",
      description: data.description || "",
      listId: data.listId || "",
    };
  };

export const reducer = (state = [], action) => {
    
    let newState;
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = createTask(action.task);
            return [...state, newTask];
        case 'DELETE_TASK':
            newState = state.filter(t => t.id !== action.id);
            return newState;
        case 'TASK_STATUS_UPDATED':
            newState = state.slice();
            newState[newState.findIndex(t => t.id === action.id)].done = !action.done;
            return newState;
        default: 
            return state;
    }
}