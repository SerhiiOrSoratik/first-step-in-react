import { NavLink } from "react-router-dom";
import './dashboard.css'

const DashboardList = ({ lists }) => {
    if (lists !== undefined) {
        const newList = lists.map((list) => {
            const url = `/lists/${list.id}`
            return (
                <div key={`list${list.id}`}>
                    <NavLink className="link" to={url}>{list.title} {list.count}</NavLink>
                </div>
            )
        })
        return (<> {newList} </>)
    }
    else return <div><p>Lists not found</p></div>


}

export default DashboardList;