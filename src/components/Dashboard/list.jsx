import { NavLink } from "react-router-dom";
import './dashboard.css'

const List = (props) => {
    const { lists } = props;
    return (
         lists.map((list) => {
            const url = `/lists/${list.id}`
            return (
                <div key={`list${list.id}`}>
                    <NavLink className="link" to={url}>{list.title}</NavLink>
                </div>
            )
    
        })
    )
    
}

export default List;