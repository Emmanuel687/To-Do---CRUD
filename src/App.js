import React, { useState } from "react";
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";

const App = () => {
  const listItems = [
    { id: 1, name: "Wash Clothes" },
    { id: 2, name: "Clean House" },
    { id: 3, name: "Take a Shower" },
  ];

  const [toDos, setToDos] = useState(listItems);

  const handleAddToDo = (toDo) => {
    setToDos((toDos) => [...toDos, toDo]);
  };

  const handleDeleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleEditToDo = (id)=>{
    setToDos((toDos)=>toDos.map(toDo=>toDo.id===id?toDo:""))

  }

  return (
    <div>
      <AddToDo handleAddToDo={handleAddToDo} toDos={toDos} />
      <ToDo toDos={toDos} handleDeleteItem={handleDeleteToDo} onSelect={handleEditToDo}/>
    </div>
  );
};

export default App;
