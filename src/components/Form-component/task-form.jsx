import { useLocation } from "react-router-dom";
import FormSelect from "./form-select";
import "./task-form.css";
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask, addTask } from '../../action'
import DateSelect from "./date-select";
import { createTask } from "../../action/service/db-query";


const TaskForm = () => {
  const lists = useSelector(state => state.lists)
  
  const dispatch = useDispatch()
  const onSubmitHandler = (event) => {
    const form = document.getElementById('task_form')
    event.preventDefault();
    const newForm = new FormData(form);
    const data = Object.fromEntries(newForm.entries());
    if (todosListId) {
      data.todosListId = todosListId;
    }
    if (data.title) {
      dispatch(createTask(data))
      dispatch(addNewTask(data.todosListId, data.due_date))
      form.reset();
    }
  };

  let pathname = useLocation().pathname.split('/');
  const findIndex = pathname.indexOf('lists');
  let todosListId = pathname.slice(findIndex + 1, findIndex + 2).join()

  return (
    <div className="form-component">
      <form id="task_form" onSubmit={onSubmitHandler}>
        <h3>New task</h3>
        <div className="input-flex">
          <input
            type="text"
            name="title"
            placeholder="title"
            className="form-input"
            maxLength="30"
          />
          <DateSelect />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="form-input"
            maxLength="50"
          />
          <FormSelect lists={lists} todosListId={todosListId} />

        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
