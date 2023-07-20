import React, { useState } from "react";

const AddToDo = ({ handleAddToDo, toDos }) => {
  const [item, setItem] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return;

    const listItem = {
      id: crypto.randomUUID(),
      name: item,
    };
    handleAddToDo(listItem);

    setItem("");
  };

  return (
    <>
    <p>You Have {toDos.length } Tasks remaining</p>
      <form onSubmit={handleSubmit}>
        <label>Add Item: </label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddToDo;
