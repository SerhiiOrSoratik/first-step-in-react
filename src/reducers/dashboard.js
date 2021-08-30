export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "TASK_STATUS_UPDATED":
      if (action.done) {
        state[action.listId]++;
        if (isTodayTask(action.due_date)) {
          state.today++;
        }
      } else {
        state[action.listId]--;
        if (isTodayTask(action.due_date)) {
          state.today--;
        }
      }
      return state;

    case "ADD_NEW_TASK":
      state[action.listId]
        ? state[action.listId]++
        : (state[action.listId] = 1);
      if (isTodayTask(action.due_date)) {
        state.today ? state.today++ : (state.today = 1);
      }
      return state;

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
    23, 59, 59, 59
  );
  const isToday = endThisDay.getTime() >= new Date(due_date).getTime();
  return isToday;
};
