
export const loadTask = (todosListId) => (dispatch) => {
  return fetch(`http://localhost:3001/lists/${todosListId}/tasks?all=true`)
    .then((res) => res.json())
    .then((tasks) =>
      dispatch({
        type: "TASK/LOADED",
        todosListId,
        tasks,
      })
    );
};

export const loadDashboardCount = (dispatch) => {
  return fetch(`http://localhost:3001/dashboard`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "LOAD_DASHBOARD_COUNT",
        data,
      })
    );
};

export const loadTodayTask = (dispatch) => {
  return fetch(`http://localhost:3001/collection/today`)
    .then((res) => res.json())
    .then((tasks) =>
      dispatch({
        type: "TASK/TODAY/LOADED",
        tasks,
      })
    );
};

export const createTask = (task) => (dispatch) => {
  return fetch(`http://localhost:3001/lists/${task.todosListId}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((task) =>
      dispatch({
        type: "CREATE_TASK",
        task,
      })
    );
};
