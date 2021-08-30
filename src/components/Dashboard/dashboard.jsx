import DashboardList from './dashboard-list';
import './dashboard.css'
import { NavLink, useLocation } from "react-router-dom";
import TaskTypeToogle from "./task-type-toogle";

const Dashboard = ({ lists, toogleTaskType, isOnlyUncompletedTasks }) => {


    let pathname = useLocation().pathname.split('/');
    const findIndex = pathname.indexOf('lists');
    let listId = pathname.slice(findIndex + 1, findIndex + 2).join()

    return (
        <div className="sidebar">
            <TaskTypeToogle toogleTaskType={toogleTaskType} listId={listId} isOnlyUncompletedTasks={isOnlyUncompletedTasks}/>
            <NavLink className="link" to='/today'>Today</NavLink>
            <DashboardList />
        </div>
    )
}

export default Dashboard;