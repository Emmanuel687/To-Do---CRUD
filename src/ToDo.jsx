import React from "react";
import ToDoList from "./ToDoList";
const ToDo = ({ toDos, handleDeleteItem ,  handleToggleToDo }) => {
  return (
    <>
      <ul>
        {toDos.map((toDo) => (
          <ToDoList key={toDo.id} toDo={toDo} handleDeleteItem={handleDeleteItem}  handleToggleToDo={ handleToggleToDo} />
        ))}
      </ul>
    </>
  );
};

export default ToDo;
