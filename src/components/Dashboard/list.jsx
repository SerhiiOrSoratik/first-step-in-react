import { NavLink } from "react-router-dom";

const List = (props) => {
    const { lists } = props;
    return lists.map((list) => {
        const url = `/${list.id}`
        return (
            <div key={`list${list.id}`}>
                <NavLink to={url}>{list.title}</NavLink>
            </div>
        )

    })
}

export default List;