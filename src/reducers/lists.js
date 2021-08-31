const lists = [
        {
          id: 1,
          title: "list1",
        },
        {
          id: 2,
          title: "list2",
        },
      ];

export const reducer = (state = lists, action) => {
  switch (action.type) {
    case 'DASHBOARD/LOADED':
    return action.data;
    default:
      return state
  }

  
}