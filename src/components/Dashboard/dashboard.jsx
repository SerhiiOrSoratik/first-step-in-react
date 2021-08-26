import List from "./list"
import './dashboard.css'
const NavBar = ({lists}) => {
    return (
        <div className="sidebar">
            <List lists={lists} />
        </div>
    ) 
}

export default NavBar;