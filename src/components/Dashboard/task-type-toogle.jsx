const TaskTypeToogle = ({ todosListId, toogleTaskType, isOnlyUncompletedTasks }) => {

    const taskTypeToogle = () => {
        const isDone = !isOnlyUncompletedTasks;
        toogleTaskType(isDone)
    }
    return <button style={!todosListId ? { visibility: 'hidden' } : {}} onClick={() => taskTypeToogle()}>Click me tenderly</button>;
}

export default TaskTypeToogle;