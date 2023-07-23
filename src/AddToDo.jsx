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
      <form onSubmit={handleSubmit}>
        <label>Add Item </label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      <p>You Have {toDos.length} Tasks remaining</p>
    </>
  );
};

export default AddToDo;
