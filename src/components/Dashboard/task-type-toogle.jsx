const TaskTypeToogle = ({ todosListId, toogleTaskType, isOnlyUncompletedTasks }) => {

    const taskTypeToogle = () => {
        const isDone = !isOnlyUncompletedTasks;
        toogleTaskType(isDone)
    }
    return <button style={!todosListId ? { visibility: 'hidden' } : {}} onClick={() => taskTypeToogle()}>Hide completed task</button>;
}

export default TaskTypeToogle;