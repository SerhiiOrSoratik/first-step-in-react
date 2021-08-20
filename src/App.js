import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';

const inc =
  (init = 0) =>
  () =>
    ++init;
const genId = inc();

const createTask = (data) => {
  return {
    id: genId(),
    title: data.title,
    done: false,
    due_date: data.due_date || "",
    description: data.description || "",
  };
};

// const options = { year: "numeric", month: "numeric", day: "numeric" };
// const date1 = new Date("8/16/2021");
// const date2 = new Date("8/15/2021");
// const date3 = new Date("8/17/2021");
// const date4 = new Date("8/16/2021");

let tasks = [
  {
    id: genId(),
    title: "first task",
    done: false,
    due_date: "8/16/2021",
    description: "first description",
  },
  {
    id: genId(),
    title: "second task",
    done: true,
    due_date: "8/16/2021",
  },
  {
    id: genId(),
    title: "third task",
    done: false,
    due_date: "8/16/2021",
    description: "third description",
  },
  {
    id: genId(),
    title: "four task",
    done: false,
    due_date: "8/16/2021",
  },
];

function App() {
  return (
    <div className="main">
      <div className="todo">
      <Header />
      <Todo tasks={tasks}/>
      </div>
    
    </div>
   
  );
}

export default App;
