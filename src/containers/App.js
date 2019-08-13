import React from "react";
import Title from "../components/Title";
import TodoList from "../components/TodoList";

import { hot } from "react-hot-loader";
import uuid from "uuid";
import style from "./App.css";

class App extends React.Component {
  state = {
    data: [
      {
        id: 1,
        text: "clean room"
      },
      {
        id: 2,
        text: "wash the dishes"
      },
      {
        id: 3,
        text: "feed my cat"
      }
    ]
  };

  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  };
  addTodo = val => {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  };
  render() {
    const { data } = this.state;
    return (
      <div className={style.TodoApp}>
        <Title title={"Todo App " + data.length} />
        <TodoList data={data} handleRemove={this.removeTodo} />
      </div>
    );
  }
}

export default hot(module)(App);
