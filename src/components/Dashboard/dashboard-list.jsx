import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './dashboard.css'

const DashboardList = () => {
    const lists = useSelector(state => state.lists)
    return (
        lists.map((list) => {
            const url = `/lists/${list.id}`
            return (
                <div key={`list${list.id}`}>
                    <NavLink to={url}>{list.title}</NavLink>
                </div>
            )
        })
 
    )

}

export default DashboardList;