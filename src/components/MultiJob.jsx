import { useState } from "react";

function MultiItem({ itemArr, setItemArr }) {
  const [isAdding, setIsAdding] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  const addItem = () => {
    if (inputValue === "") return;
    const jobExists = itemArr.some((job) => job === inputValue);
    if (jobExists) return;
    setItemArr([...itemArr, inputValue]);
    setIsAdding(false);
    setInputValue("");
  };

  const editButt = (e) => {
    setEditIndex(e.target.value);
    setInputValue(itemArr[e.target.value]);
    setIsEditing(true);
  };

  const editItem = () => {
    if (inputValue === "") return;
    const jobExists = itemArr.some((job) => job === inputValue);
    if (jobExists) return;
    itemArr[editIndex] = inputValue;
    setItemArr([...itemArr]);
    setIsEditing(false);
    setInputValue("");
  };

  if (itemArr.length > 0 && !isAdding && !isEditing) {
    return (
      <>
        {itemArr.map((item, index) => (
          <div key={item} style={{ display: "flex" }}>
            <h1>{item}</h1>
            <button onClick={editButt} value={index}>
              edit
            </button>
          </div>
        ))}
        <button onClick={() => setIsAdding(true)}>Add More</button>
      </>
    );
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!isEditing ? (
        <button onClick={addItem}>Add</button>
      ) : (
        <button onClick={editItem}>Finish</button>
      )}
    </>
  );
}

export { MultiItem };
