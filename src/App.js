import "./App.css";
import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

function App() {
  const toDoItems = todoData.map((item) => (
    <ToDoItem key={item.id} item={item} />
  ));

  return <div className="to-do-list">{toDoItems}</div>;
}

export default App;
