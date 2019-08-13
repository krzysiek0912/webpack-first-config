import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, handleRemove }) => {
  const list = data.map(elem => (
    <Todo elem={elem} handleRemove={handleRemove} key={elem.id} />
  ));
  return <ul>{list}</ul>;
};

export default TodoList;
