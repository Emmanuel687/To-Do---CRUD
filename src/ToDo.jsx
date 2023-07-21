import React from "react";
import ToDoList from "./ToDoList";
const ToDo = ({ toDos, handleDeleteItem , onSelect }) => {
  return (
    <>
      <ul>
        {toDos.map((toDo) => (
          <ToDoList key={toDo.id} toDo={toDo} handleDeleteItem={handleDeleteItem} onSelect={onSelect} />
        ))}
      </ul>
    </>
  );
};

export default ToDo;
