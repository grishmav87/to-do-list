import React from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todoData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.todo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
      return {
        todo: updatedTodo,
      };
    });
  }

  render() {
    const toDoItems = this.state.todo.map((item) => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="to-do-list">{toDoItems}</div>;
  }
}

export default App;
