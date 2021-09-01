export const reducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case "TASK_STATUS_UPDATED":
      newState = Object.assign(state);
      if (action.done) {
        newState.lists[action.todosListId - 1].count++;
        if (isTodayTask(action.due_date)) {
          newState.today++;
        }
      } else {
        newState.lists[action.todosListId - 1].count--;
        if (isTodayTask(action.due_date)) {
          newState.today--;
        }
      }
      return newState;

    case "ADD_NEW_TASK":
      newState = Object.assign(state);
      newState.lists[action.todosListId - 1].count++;

      if (isTodayTask(action.due_date)) {
        newState.today ? newState.today++ : (newState.today = 1);
      }
      return newState;

    case "DELETE_TASK":
      newState = Object.assign(state);
      newState.lists[action.todosListId - 1].count--;
      return newState;

    case "LOAD_DASHBOARD_COUNT":
      newState = Object.assign(action.data);
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
