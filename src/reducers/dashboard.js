export const reducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case "CHANGE_CONDITION_TASK":
      newState = Object.assign(state);
      if (!action.done) {
        newState.openedTasks[action.todosListId]++;
        if (isTodayTask(action.due_date)) {
          newState.today++;
        }
      } else {
        newState.openedTasks[action.todosListId]--;
        if (isTodayTask(action.due_date)) {
          newState.today--;
        }
      }
      return newState;

    case "CREATE_TASK":
      newState = Object.assign(state);
      newState.openedTasks[action.task.todosListId]++;

      if (isTodayTask(action.task.due_date)) {
        newState.today ? newState.today++ : (newState.today = 1);
      }
      return newState;

    case "DELETE_TASK":
      newState = Object.assign(state);
      newState.openedTasks[action.todosListId]--;
      return newState;

    case "LOAD_DASHBOARD_COUNT":
      newState = Object.assign(action.data);
      console.log(newState);
      newState.lists.sort((a, b) => (a.id > b.id ? 1 : -1));
      return newState;

    default:
      return state;
  }
};

const isTodayTask = (due_date) => {
  const nowDay = new Date();
  const endThisDay = new Date(
    nowDay.getFullYear(),
    nowDay.getMonth(),
    nowDay.getDate(),
    23,
    59,
    59,
    59
  );
  const isToday = endThisDay.getTime() >= new Date(due_date).getTime();
  return isToday;
};
