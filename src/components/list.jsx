
const List = (props) => {
    const { lists } = props;
    return lists.map((list) => {
        return (
            <div key={`list${list.id}`}>
                <p>{list.title}</p>
            </div>
        )

    })
}

export default List;