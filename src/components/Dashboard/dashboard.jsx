import List from "./list"
import './dashboard.css'
import { NavLink } from "react-router-dom";

const NavBar = ({ lists, toogleTaskType, isOnlyUncompletedTasks }) => {

    const taskTypeToogle = () => {
        const isDone = !isOnlyUncompletedTasks;
        toogleTaskType(isDone)
    }

    return (
        <div className="sidebar">
            <button onClick={() => taskTypeToogle()}>Click me tenderly</button>
            <NavLink className="link" to='/today'>Today</NavLink>
            <List lists={lists} />
        </div>
    )
}

export default NavBar;