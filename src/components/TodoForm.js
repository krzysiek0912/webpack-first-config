import React from "react";
import style from "./TodoForm.css";
class TodoForm extends React.Component {
  state = {
    todo: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    event.preventDefault();
    this.props.handleAdd(this.state.todo);
    this.setState({ todo: "" });
  };
  render() {
    const { handleSubmit, handleChange, state } = this;
    return (
      <form className={style.TodoForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={state.todo}
          onChange={handleChange}
        />
      </form>
    );
  }
}

export default TodoForm;
