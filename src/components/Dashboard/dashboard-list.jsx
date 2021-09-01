import { NavLink } from "react-router-dom";
import './dashboard.css'

const DashboardList = ({ dashboard }) => {
    if (dashboard !== undefined) {
        const newList = dashboard.lists.map((list) => {
            const url = `/lists/${list.id}`
            return (
                <div key={`list${list.id}`}>
                    <NavLink className="link" to={url}>{list.title} {dashboard.openedTasks[list.id]}</NavLink>
                </div>
            )
        })
        return (<> {newList} </>)
    }
    else return <div><p>Lists not found</p></div>


}

export default DashboardList;