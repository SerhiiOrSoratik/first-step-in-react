export const reducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case 'TASK_STATUS_UPDATED':
             newState = Object.assign({}, state)
            !action.done ? newState[action.listId]-- : newState[action.listId]++;
                   console.log(newState)
            return newState;

        case 'ADD_NEW_TASK':
         newState = Object.assign({}, state)
        newState[action.listId] ? newState[action.listId]++ : newState[action.listId] = 1;
        console.log(state)
        return newState;

        default: 
        return state
    }
}   