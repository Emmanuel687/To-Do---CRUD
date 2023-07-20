import React from "react";
import ToDoList from "./ToDoList";
const ToDo = ({ toDos, handleDeleteItem }) => {
  return (
    <>
      <ul>
        {toDos.map((toDo) => (
          <ToDoList key={toDo.id} toDo={toDo} handleDeleteItem={handleDeleteItem} />
        ))}
      </ul>
    </>
  );
};

export default ToDo;
