import { useState, useEffect } from "react"

function TodoApi() {
    const [data, setData] = useState([])
    const [newTodo, setNewTodo] = useState("")
    useEffect(() => {
        async function loadApi() {
            let res = await fetch("https://dummyjson.com/todos")
            let data = await res.json()
            setData(data.todos)
            console.log(data.todos);
        }
        loadApi()
    }, [])

    function inputHandler(e) {
        console.log(e.target.value);
        setNewTodo(e.target.value)
    }

    function addHandler() {
        const rid = crypto.randomUUID()
        const newItems = { completed: false, todo: newTodo, id: rid, userId: rid }
        setData(prevData => [newItems, ...prevData])
        setNewTodo("");
    }

    function deleteHandler(ID) {
        const deletedData = data.filter(element => { return ID != element.id })
        setData(deletedData)
    }

    function completeHandler(ID) {
        const completedData = data.map((element) => {
            return element.id == ID ? { ...element, completed: !element.completed } : element
        })
        setData(completedData)
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input onChange={(e) => inputHandler(e)} value={newTodo} type="text" />
                <button onClick={() => addHandler()}>Add</button>
            </div>
            {data.map((dat => <li className="todoList" key={dat.id}><span className={dat.completed ? "checked" : "unchecked"}>{dat.todo}</span><span><button onClick={() => completeHandler(dat.id)}>done</button></span><span><button onClick={() => deleteHandler(dat.id)}>delete</button></span></li>))}
        </div>
    )
}

export default TodoApi



