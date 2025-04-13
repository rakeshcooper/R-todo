import { useEffect, useState } from "react"

function SampleTest() {

    const rId = crypto.randomUUID();
    const [data, setData] = useState(JSON.parse(localStorage.getItem("rNewItems") ?? "[]"))
    //const [data, setData] = useState([])
    const [newData, setnewData] = useState()

    function addHandler() {
        setData((data) => [{ todo: newData, id: rId, isEdited: false, isChecked: false }, ...data])
        console.log(data)
    }

    function getInputValue(e) {
        setnewData(e.target.value)

    }

    function editHandler(rId) {
        const editData = data.map((datas) => {
            return datas.id == rId ? { ...datas, isEdited: !datas.isEdited } : datas
        })
        setData(editData)
        console.log(editData);

    }

    function getUpdateValue(e) {
        setnewData(e.target.value)
    }

    function updateHandler(rId) {
        const updatedData = data.map((datas) => {
            return datas.id == rId ? { ...datas, todo: newData, isEdited: !datas.isEdited } : datas
        })
        setData(updatedData)
    }

    function deleteHandler(rId) {
        const deletedData = data.filter((datas) => {
            return datas.id != rId
        })
        setData(deletedData)
        console.log("deleted");

    }

    function checkedHandler(rId) {
        const checkedData = data.map((datas) => {
            return datas.id == rId ? { ...datas, isChecked: !datas.isChecked } : datas
        })
        console.log(checkedData);
        setData(checkedData)
    }

    useEffect(() => {
        localStorage.setItem("rNewItems", JSON.stringify(data))
    }, [data])



    return (<>
        <h1>Todo Test</h1>
        <div><input type="text" onInput={(e) => { getInputValue(e) }} name="todoInput" id="todoInput" /><button onClick={addHandler}>Add</button></div>
        <ul>
            {data.map((datas, index) =>
                <li key={index}>
                    <span className={datas.isChecked ? "checked" : "unchecked"}>{datas.todo}</span>
                    <span>
                        {datas.isEdited ? (<><input type="text" defaultValue={datas.todo} onInput={(e) => { getUpdateValue(e) }} name="updateValue" id="updateValue" /><button onClick={() => updateHandler(datas.id)}>update</button></>) : (<></>)}
                        <button onClick={() => editHandler(datas.id)}>{datas.isEdited ? "cancel" : "edit"}</button>
                    </span>
                    <span>
                        <button onClick={() => deleteHandler(datas.id)}>delete</button>
                    </span>
                    <span>
                        <button onClick={() => checkedHandler(datas.id)}>{datas.isChecked ? "undone" : "done"}</button>
                    </span>
                </li>)}
        </ul>
    </>)
}

export default SampleTest