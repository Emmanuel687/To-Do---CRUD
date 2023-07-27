import "./index.css";

const ToDoList = ({ toDo, handleDeleteItem, handleToggleToDo }) => {
  return (
    <div className="display">
      <p className={toDo.completed ? "underlined" : ""}>{toDo.name}</p>
      <button className="button" onClick={() => handleDeleteItem(toDo.id)}>
        Delete
      </button>
      <input
        value={toDo.completed}
        type="checkbox"
        onChange={() => handleToggleToDo(toDo.id)}
      />
    </div>
  );
};

export default ToDoList;
