import DashboardList from './dashboard-list';
import './dashboard.css'
import { NavLink, useLocation } from "react-router-dom";
import TaskTypeToogle from "./task-type-toogle";


const Dashboard = ({ toogleTaskType, isOnlyUncompletedTasks, lists, dashboard }) => {
    const location = useLocation().pathname;
    let pathname = useLocation().pathname.split('/');
    const findIndex = pathname.indexOf('lists');
    let todosListId = pathname.slice(findIndex + 1, findIndex + 2).join()

    if (dashboard !== undefined && lists !== undefined) {
        return (
            <div className="sidebar">
                <UncompletedTask todosListId={todosListId} dashboard={dashboard} lists={lists} location={location} />
                <TaskTypeToogle toogleTaskType={toogleTaskType} todosListId={todosListId} isOnlyUncompletedTasks={isOnlyUncompletedTasks} />
                <NavLink className="link" to='/today'>Today {dashboard.today ? dashboard.today : ''}</NavLink>
                <DashboardList lists={lists} dashboard={dashboard} />
            </div>
        )
    }
    else return (<></>)

}

const UncompletedTask = ({ todosListId, location, dashboard, lists }) => {
    if (location !== '/today') {
        const index = findListIndex(lists, todosListId)
        return (
            <p>Uncompleted: {lists[index] ? lists[index].count : 0}</p>
        )
    }
    else if (location === '/today') {
        return (
            <p>Uncompleted: {dashboard.today ? dashboard.today : 0}</p>
        )
    }
}

const findListIndex = (lists, todosListId) => {
    return lists.findIndex((l) => l.id === +todosListId);
  };

export default Dashboard;