import { connect } from "react-redux";
import { selectList } from "../action";

const TaskList = (props) => {

    const showLists = () => {
        return props.lists.map( l => <li onClick={() => selectList}>{l.title}</li>)
    }

    return <ul>{showLists()}</ul>

}


const mapStateToProps = (state) => {
    return {
      lists: state.lists,
    };
  };
  
  export default TaskList;