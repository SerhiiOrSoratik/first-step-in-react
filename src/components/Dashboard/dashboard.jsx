import DashboardList from './dashboard-list';
import './dashboard.css'
import { NavLink, useLocation, useParams } from "react-router-dom";
import TaskTypeToogle from "./task-type-toogle";
import { useSelector } from 'react-redux';

const Dashboard = ({ lists, toogleTaskType, isOnlyUncompletedTasks }) => {
    const location = useLocation().pathname;

    let pathname = useLocation().pathname.split('/');
    const findIndex = pathname.indexOf('lists');
    let listId = pathname.slice(findIndex + 1, findIndex + 2).join()
    return (
        <div className="sidebar">
            <UncompletedTask listId={listId} location={location} />
            <TaskTypeToogle toogleTaskType={toogleTaskType} listId={listId} isOnlyUncompletedTasks={isOnlyUncompletedTasks} />
            <NavLink className="link" to='/today'>Today</NavLink>
            <DashboardList lists={lists} />
        </div>
    )
}

const UncompletedTask = ({ listId, location }) => {
    const taskCount = useSelector(state => state.dashboard)
    if (location != '/today') {
        return (
            <p>Uncompleted task: {taskCount[listId] ? taskCount[listId] : 0}</p>
        )
    }
    else if (location === '/today') {
        return (
            <p>Uncompleted task: {taskCount.today ? taskCount.today : 0}</p>
        )
    }

}

export default Dashboard;