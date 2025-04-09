import { useState } from "react"

function SampleTest(){
const rId = crypto.randomUUID();    
const [data,setData] = useState([])
const [newData, setnewData] = useState()

function addHandler(){
    setData( (data) => [{ todo:newData, id:rId, isEdited:false, isChecked: true},...data])
    console.log(data);
    
}

function getInputValue(e){
    setnewData(e.target.value)
}

    return(<>
    <h1>Todo Test</h1>
    <div><input type="text" onInput={(e) => {getInputValue(e)}} name="todoInput" id="todoInput" /><button onClick={addHandler}>Add</button></div>
    <ul>
        {data.map((datas,index) => 
        <li key={index}>{datas.todo}</li>)}
    </ul>
    </>)
}

export default SampleTest