const TaskTypeToogle = ({ listId, toogleTaskType, isOnlyUncompletedTasks }) => {

    const taskTypeToogle = () => {
        const isDone = !isOnlyUncompletedTasks;
        toogleTaskType(isDone)
    }
    return <button style={!listId ? { visibility: 'hidden' } : {}} onClick={() => taskTypeToogle()}>Click me tenderly</button>;
}

export default TaskTypeToogle;