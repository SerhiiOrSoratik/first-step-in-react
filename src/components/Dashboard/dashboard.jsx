import DashboardList from './dashboard-list';
import './dashboard.css'
import { NavLink, useLocation, useParams } from "react-router-dom";
import TaskTypeToogle from "./task-type-toogle";
import { useSelector } from 'react-redux';


const Dashboard = ({ toogleTaskType, isOnlyUncompletedTasks }) => {
    console.log(useSelector(state => state.lists))


    const location = useLocation().pathname;
    let pathname = useLocation().pathname.split('/');
    const findIndex = pathname.indexOf('lists');
    let todosListId = pathname.slice(findIndex + 1, findIndex + 2).join()

    const dashboard = useSelector(state => state.dashboard)
    const lists = useSelector(state => state.dashboard.lists)
    
    return (
        <div className="sidebar">
            <UncompletedTask todosListId={todosListId} location={location} />
            <TaskTypeToogle toogleTaskType={toogleTaskType} todosListId={todosListId} isOnlyUncompletedTasks={isOnlyUncompletedTasks} />
            <NavLink className="link" to='/today'>Today {dashboard.today ? dashboard.today : ''}</NavLink>
            <DashboardList lists={lists}/>
        </div>
    )
}

const UncompletedTask = ({ todosListId, location }) => {
    const taskCount = useSelector(state => state.dashboard)
    if (location != '/today') {
        return (
            <p>Uncompleted task: {taskCount[todosListId] ? taskCount[todosListId] : 0}</p>
        )
    }
    else if (location === '/today') {
        return (
            <p>Uncompleted task: {taskCount.today ? taskCount.today : 0}</p>
        )
    }

}

export default Dashboard;