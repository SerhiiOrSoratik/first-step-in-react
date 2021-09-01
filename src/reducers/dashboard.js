const findListIndex = (state, todosListId) => {
  return state.lists.findIndex((l) => l.id === todosListId);
};

export const reducer = (state = {}, action) => {
  let newState = {};
  let listIndex;
  switch (action.type) {
    case "TASK_STATUS_UPDATED":
      newState = Object.assign(state);
      listIndex = findListIndex(state, action.todosListId);
      if (action.done) {
        newState.lists[listIndex].count++;
        if (isTodayTask(action.due_date)) {
          newState.today++;
        }
      } else {
        newState.lists[listIndex].count--;
        if (isTodayTask(action.due_date)) {
          newState.today--;
        }
      }
      return newState;

    case "ADD_NEW_TASK":
      newState = Object.assign(state);
      listIndex = findListIndex(state, +action.todosListId);
      newState.lists[listIndex].count++;

      if (isTodayTask(action.due_date)) {
        newState.today ? newState.today++ : (newState.today = 1);
      }
      return newState;

    case "DELETE_TASK":
      newState = Object.assign(state);
      listIndex = findListIndex(state, action.todosListId);
      newState.lists[listIndex].count--;
      return newState;

    case "LOAD_DASHBOARD_COUNT":
      newState = Object.assign(action.data);
      newState.lists.sort((a, b) => a.id > b.id ? 1 : -1);
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
