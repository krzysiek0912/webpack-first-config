import React from "react";
import Todo from "./Todo";
import style from "./TodoList.css";

const TodoList = ({ data, handleRemove }) => {
  const list = data.map(elem => (
    <Todo elem={elem} handleRemove={handleRemove} key={elem.id} />
  ));
  return <ul className={style.TodoList}>{list}</ul>;
};

export default TodoList;
