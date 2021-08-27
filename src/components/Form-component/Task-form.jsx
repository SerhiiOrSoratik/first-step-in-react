
import { useLocation } from "react-router-dom";
import FormSelect from "./select";
import "./Task-form.css";

let idCount = 1;

const createTask = (data) => {
  return {
    id: idCount++,
    title: data.title,
    done: false,
    due_date: data.due_date || "",
    description: data.description || "",
    listId: data.listId || "",
  };
};

const addNewTask = (task, taskList, changeTasks) => {
  const newTask = createTask(task);
  changeTasks([...taskList, newTask]);
};

const TaskForm = ({ lists, changeTasks, taskList }) => {
  const onSubmitHandler = (event) => {
    const form = document.getElementById('task_form')
    event.preventDefault();
    const newForm = new FormData(form);
    const data = Object.fromEntries(newForm.entries());
    if (listId) {
      data.listId = listId;
    }
    if (data.title) {
      addNewTask(data, taskList, changeTasks);
      form.reset();
    }
  };

  let pathname = useLocation().pathname.split('/');
  const findIndex = pathname.indexOf('lists');
  let listId = pathname.slice(findIndex + 1, findIndex + 2).join()

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
          />
          <input
            type="date"
            name="due_date"
            placeholder="due_date"
            className="form-input"
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            className="form-input"
          />
          <FormSelect lists={lists} listId={listId}/>

        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
