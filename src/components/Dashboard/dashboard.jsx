import List from "./list"
import './dashboard.css'
import { NavLink } from "react-router-dom";
const NavBar = ({lists}) => {
    return (
        <div className="sidebar">
            <NavLink  className="link" to='/today'>Today</NavLink>
            <List lists={lists} />
        </div>
    ) 
}

export default NavBar;