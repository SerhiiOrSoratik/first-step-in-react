import { Component } from "react";
import "./Task-form.css";
class TaskForm extends Component {
  state = {listId: 'other'};
  lists;
  constructor(props) {
    super();
    this.lists = props.lists;
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state && this.state.title) {
      this.props.onSubmit(this.state);
      this.setState({ title: "", due_date: "", description: "", listId: 'other'});
    } else alert("Enter title pls");
  };

  setTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  setDueDate = (event) => {
    this.setState({
      due_date: event.target.value,
    });
  };

  setDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  setListId = (event) => {
    console.log(event.target.value)
    this.setState({
      listId: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form id="task_form" onSubmit={this.onSubmitHandler}>
          <h3>New task</h3>
          <div className="input-flex">
            <input
              type="text"
              name="title"
              placeholder="title"
              onChange={this.setTitle}
              value={this.state.title}
            />
            <input
              type="date"
              name="due_date"
              placeholder="due_date"
              onChange={this.setDueDate}
              value={this.state.due_date}
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              onChange={this.setDescription}
              value={this.state.description}
            />
            <select onChange={this.setListId}>
              <option selected value='other'>other</option>
              {this.lists.map(l => {
                return (
                  <option value={l.id} key={`listId${l.id}`}>{l.title}</option>
                )
              })}
            </select>

          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
