import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import './dashboard.css'

const DashboardList = ({lists}) => {
    if (lists != undefined) {
        console.log(lists)
        const newList = lists.map((list) => {
            console.log(list.id)
            const url = `/lists/${list.id}`
            return (
                <div key={`list${list.id}`}>
                    <NavLink to={url}>{list.title} {list.count}</NavLink>
                </div>
            )
        })
        return (<> {newList} </>)
    }
    else return <div><p>Sorry</p></div>
    

}

export default DashboardList;