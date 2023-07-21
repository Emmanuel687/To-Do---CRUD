import React, { useState } from "react";
import "./index.css";

const ToDoList = ({ toDo, handleDeleteItem, onSelect }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="display">
      <input type="checkbox" onChange={(e) => setCompleted(e.target.checked)} />

      <p className={completed ? "underlined" : ""}>{toDo.name}</p>
      {completed && <p>Completed</p>}
      <button className="button" onClick={() => handleDeleteItem(toDo.id)}>
        Delete
      </button>
      <button className="button" onClick={() => onSelect(toDo.id)}>
        Editt
      </button>
    </div>
  );
};

export default ToDoList;
