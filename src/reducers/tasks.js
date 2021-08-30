import { addTask, deleteTask, changeConditionTask } from "../action";

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

export const tasks = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = createTask(action.task);
            return [...state, newTask]
        default: 
        console.log('no')
            return state;
    }
}