import React, { useState } from "react";
import "./index.css";

const ToDoList = ({ toDo, handleDeleteItem }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <p className={completed ? "underlined" : ""}>{toDo.name}</p>
      <button onClick={() => handleDeleteItem(toDo.id)}>Delete</button>
      <input type="checkbox" onChange={(e) => setCompleted(e.target.checked)} />
      {completed&&<p>Completed</p>}
    </div>
  );
};

export default ToDoList;
