import React, { Component } from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";
import todoData from "./todoData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: todoData,
    };
  }

  render() {
    const toDoItems = this.state.todo.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ));
    return <div className="to-do-list">{toDoItems}</div>;
  }
}

export default App;
