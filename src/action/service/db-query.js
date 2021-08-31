export const loadDashboard = (dispatch) => {
  fetch("http://localhost:3001/lists")
    .then((res) => res.json())
    .then((dashboard) =>
      dispatch({
        type: "DASHBOARD/LOADED",
        data: dashboard,
      })
    );
};

export const loadTask = (listId) => (dispatch) => {
  return fetch(`http://localhost:3001/lists/${listId}/tasks?all=true`)
    .then((res) => res.json())
    .then((tasks) =>
      dispatch({
        type: "TASK/LOADED",
        listId,
        tasks,
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
  return fetch(`http://localhost:3001/lists/${task.listId}/tasks`, {
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
