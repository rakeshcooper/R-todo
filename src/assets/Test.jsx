import { useState, useRef } from "react";

function Test() {
  const [datas, setDatas] = useState([]);
  const [newdata, setNewdata] = useState("");
  const inputRefadd = useRef();
  const inputRefUpdate = useRef();

  function inputhandler(e) {
    setNewdata(e.target.value);
  }

  function addHandler() {
    const data = { todo: newdata, rId: crypto.randomUUID(), isEdited: false };
    setDatas((datas) => [...datas, data]);
    inputRefadd.current.value = null;
  }

  function deleteHandler(rId) {
    setDatas(datas.filter((element) => element.rId !== rId));
  }

  function editHandler(rId) {
    // Update the isEdited flag for the correct item using map
    const updatedData = datas.map((element) =>
      element.rId === rId
        ? { ...element, isEdited: !element.isEdited } // Toggle the isEdited state
        : element
    );
    setDatas(updatedData); // Set the new updated state
  }

  function updateHandler(e,rId) {
    // Handle the update logic for the task
    const updatedTask = inputRefUpdate.current.value; // Get the updated value
    const updatedData = datas.map((element) =>
      element.rId === rId
        ? { ...element, todo: updatedTask, isEdited: false } // Update task and reset isEdited
        : element
    );
    setDatas(updatedData);
  }

  return (
    <>
      <div>
        <input
          ref={inputRefadd}
          type="text"
          placeholder="Enter new task..."
          onChange={(e) => inputhandler(e)}
        />
        <button onClick={addHandler}>Add</button>
      </div>
      <ul>
        {datas.map((list, index) => (
          <li key={index}>
            <span>
              {list.isEdited ? (
                <>
                  <input
                    ref={inputRefUpdate}
                    type="text"
                    defaultValue={list.todo}
                  />
                  <button onClick={() => updateHandler(e,list.rId)}>Update</button>
                </>
              ) : (
                <>{list.todo}</>
              )}
            </span>
            <button onClick={() => editHandler(list.rId)}>
              {list.isEdited ? "Cancel" : "Edit"}
            </button>
            <button onClick={() => deleteHandler(list.rId)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Test;
