import { useState, useEffect, useRef } from "react"


function Newtest() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("NewtestItems") ?? "[]"))
    const [newData, setNewData] = useState()
    let inputRef = useRef(null);
    const randomId = crypto.randomUUID();

    function inputHandler(e) {
        setNewData(e.target.value)
    }

    function addHandler() {
        setData(prevData => [{ todo: newData, ID: randomId, isChecked: false, isEdited: false },
        ...prevData])
        inputRef.current.value = ""
    }

    function editHandler(ID) {
        const editedData = data.map(element => {
            return element.ID == ID ? { ...element, isEdited: !element.isEdited } : element
        })
        setData(editedData)
    }

    function updateInputHandler(e) {
        setNewData(e.target.value)
    }

    function updateHandler(ID) {
        const updatedData = data.map(element => {
            return element.ID == ID ? { ...element, todo: newData, isEdited: !element.isEdited } : element
        })
        setData(updatedData)
    }

    function deleteHandler(ID) {
        const deleteddata = data.filter(element => {
            return element.ID != ID
        })
        setData(deleteddata)
    }

    function isCheckedHandler(ID) {
        const checkedData = data.map(element => {
            return element.ID == ID ? { ...element, todo: newData, isChecked: !element.isChecked } : element
        })
        setData(checkedData)
    }

    useEffect(() => {
        localStorage.setItem("NewtestItems", JSON.stringify(data))
    }, [data]
    )

    return (<>
        <h1>Todo</h1>
        <h3>Enter Todo Below</h3>
        <div>
            <input onInput={(e) => inputHandler(e)} ref={inputRef} type="text" placeholder="Enter a todo" />
            <button onClick={addHandler}>Add</button>
        </div>
        <ul>
            {
                data.map((element, index) =>
                    <li key={index}>
                        <span className={element.isChecked ? "checked" : "unchecked"}>{element.todo}</span>
                        <span>
                            {element.isEdited ? (<><input defaultValue={element.todo} onInput={(e) => updateInputHandler(e)} type="text" />
                                <button onClick={() => updateHandler(element.ID)}>Update</button></>) : (<></>)}
                            <button onClick={() => editHandler(element.ID)}>{element.isEdited ? "Cancel" : "Edit"}</button>
                        </span>
                        <span><button onClick={() => deleteHandler(element.ID)}>Delete</button></span>
                        <span><button onClick={() => isCheckedHandler(element.ID)}>{element.isChecked ? "Undone" : "Done"}</button></span>
                    </li>)
            }
        </ul>
    </>)
}

export default Newtest