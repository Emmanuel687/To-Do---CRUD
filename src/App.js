import React, { useState } from "react";
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";

const App = () => {
  const listItems = [
    { id: 1, name: "Wash Clothes", completed: true },
    { id: 2, name: "Eat", completed: false },
    { id: 3, name: "Pack Item", completed: true },
  ];

  const [toDos, setToDos] = useState(listItems);

  const handleAddToDo = (toDo) => {
    setToDos((toDos) => [...toDos, toDo]);
  };

  const handleDeleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleToggleToDo = (id) => {
    setToDos((toDos) =>
      toDos.map((toDo) =>
        toDo.id === id ? {...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  return (
    <div>
      <AddToDo handleAddToDo={handleAddToDo} toDos={toDos} />
      <ToDo
        toDos={toDos}
        handleDeleteItem={handleDeleteToDo}
        handleToggleToDo={handleToggleToDo}
      />
    </div>
  );
};

export default App;
