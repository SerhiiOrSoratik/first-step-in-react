export const loadDashboard = (dispatch) => {
  fetch("http://localhost:3000/lists")
    .then((res) => res.json())
    .then((dashboard) =>
      dispatch({
        type: "dashboard/loaded",
        data: dashboard,
      })
    );
};

// const getTasks = () => {
//   return fetch(`http://localhost:3000/tasks`, {
//     method: "GET",
// headers: {
//   "Content-Type": "application/json",
// },
//   }).then((response) => response.json());
// };
