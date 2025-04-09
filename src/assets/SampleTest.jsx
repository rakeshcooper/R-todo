import { useState } from "react"

function SampleTest(){
const rId = crypto.randomUUID();    
const [data,setData] = useState([])
const [newData, setnewData] = useState()

function addHandler(){
    setData( (data) => [{ todo:newData, id:rId, isEdited:false, isChecked: true},...data])
    console.log(data)
}

function getInputValue(e){
    setnewData(e.target.value)
}

function editHandler(rId){
   const editData = data.map((datas) => {
       return datas.id == rId ? {...datas, isEdited :!datas.isEdited } : datas
    })
    // console.log(rId);
    setData(editData)
}



    return(<>
    <h1>Todo Test</h1>
    <div><input type="text" onInput={(e) => {getInputValue(e)}} name="todoInput" id="todoInput" /><button onClick={addHandler}>Add</button></div>
    <ul>
        {data.map((datas,index) => 
        (<li key={index}>
            <span>{datas.todo}</span>
            <span>
                {datas.isEdited ? (<><input type="text" name="" id="" /><button>update</button></>) : (<></>)}
                <button onClick={() => editHandler(datas.id)}>{datas.isEdited ? "cancel" : "edit"}</button>        
                </span>
        </li>))}
    </ul>
    </>)
}

export default SampleTest