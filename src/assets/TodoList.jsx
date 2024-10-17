import React, {useState} from "react"

function TodoList(){
    
    const [tasks, setTasks] = useState(["Drink Water","Go to the Gym"])
    const [newTask, setNewtask] = useState()

    function handleInput(event){
        setNewtask(event.target.value)
    }

    function addTask(){
        setTasks([...tasks, newTask])
    }

    return(<>
        <div>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInput} />
                <button onClick={addTask}>AddTask</button>
            </div>
            <ul>
                {tasks.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    </>)
}

export default TodoList