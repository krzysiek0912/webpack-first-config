import React from "react";

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
  };
  render() {
    const { handleSubmit, handleChange, state } = this;
    return (
      <form onSubmit={handleSubmit}>
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
