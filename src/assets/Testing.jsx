import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
function Testing(){

    const [data,setData] = useState(JSON.parse(localStorage.getItem("TRItems") ?? "[]"))
    const [newdata, setNewdata] = useState()

    function addHandler(){
        setData(data => [...data,{ todo:newdata, rId:uuidv4(), isEdited: false, isChecked: false}])
        console.log(data);
    }

    function inputValue(e){
        setNewdata(e.target.value)
    }

    function editHandler(rId){
        const editData =  data.map((element) => element.rId === rId ? {...element, isEdited: !element.isEdited} : element)
           setData(editData)
           console.log(data);
       }
   
       function updateValue(e){
           setNewdata(e.target.value)
       }
   
       function updateHandler(rId){
           const updateData = data.map((element) => element.rId === rId ? {...element, todo:newdata, isEdited: false} : element)
           setData(updateData)
       }
   


    return(
        <>
        <h1>Todo</h1>
        <div><input type="text" placeholder='Please enter todo' onInput={(e) => inputValue(e)}/><button onClick={addHandler}>Add</button></div>
        <ul>
            {data.map((datas,index) => (<li key={index}><span className={datas.isChecked ? "checked" : "unchecked"}>{datas.todo
            }</span>
            <span>{ datas.isEdited ? (<><input type="text" defaultValue={datas.todo} onInput={(e) => updateValue(e)}/><button onClick={() => updateHandler(datas.rId)}>update</button></>) : (<></>)}</span>
            <button onClick={() => editHandler(datas.rId)}>{datas.isEdited  ? "cancel" : "edit"}</button>
            <button onClick={() => deleteHandler(datas.rId)}>delete</button>
            <button onClick={() => checkHandler(datas.rId)}>{datas.isChecked ? "undone" : "done"}</button>
            </li>))}
        </ul>
        </>
    )
}
export default Testing