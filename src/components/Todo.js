import React from "react";

const Todo = ({ elem, handleRemove }) => {
  return <li onClick={() => handleRemove(elem.id)}>{elem.text}</li>;
};

export default Todo;
