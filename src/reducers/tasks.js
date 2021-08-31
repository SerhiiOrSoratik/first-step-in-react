let idCount = 1;

const createTask = (data) => {
    return {
      id: idCount++,
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

        case 'TASK/LOADED':
            return action.tasks;
        
        case 'TASK/TODAY/LOADED':
            return action.tasks
        
        case 'CREATE_TASK':
            return [...state, createTask(action.task)]
        default: 
            return state;
    }
}