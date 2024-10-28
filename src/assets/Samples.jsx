import { v4 as uuidv4 } from 'uuid';
import { useState ,useEffect} from 'react';
function Samples(){

    const [data, setData] = useState(JSON.parse(localStorage.getItem("RuItems") ?? "[]"))
    const [newdata, setNewdata] = useState()
    let uData
    function addHandler(){
        setData(data => [{todo: newdata, rId:uuidv4(), isEdited: false, isChecked: false}, ...data])
        console.log(data);
    }

    function inputData(e){
        setNewdata(e.target.value)
    }

    function editHandler(rId){
        const editData = data.map((element) => 
            element.rId === rId ? {...element,isEdited : !element.isEdited} : element
        )
        setData(editData)
    }

    function inputUpdatehandler(e){
        // uData = e.target.value 
        setNewdata(e.target.value)
    }

    function updatehandler(rId){
        const updateData = data.map((element) => 
            element.rId === rId ? {...element,todo: newdata,  isEdited : !element.isEdited} : element
        )
        setData(updateData)
    }

    function deleteHandler(rId){
       const deletedData = data.filter((element) => 
            element.rId != rId )
       setData(deletedData)
    }

    function checkedHandler(rId){
        const checkedData = data.map((element) => 
            element.rId === rId ? {...element,  isChecked : !element.isChecked} : element
        )
        setData(checkedData)
    }
    
   useEffect(
    () => {
        localStorage.setItem("RuItems", JSON.stringify(data))
    },[data]
   )

    return(<>
        <h1>Todo</h1>
        <div><input type="text" placeholder='Please enter todo' onInput={(e) => inputData(e)}/><button onClick={addHandler}>Add</button></div>
        <ul>
            {data.map((datas,index) => (<li key={index}><span className={datas.isChecked ? "checked" : "unchecked"}>{datas.todo}</span>
            <span>
                {datas.isEdited ? (<><input type="text" defaultValue={datas.todo} onInput={(e) => inputUpdatehandler(e)}/><button onClick={() => updatehandler(datas.rId)}>update</button></>) : (<></>)
                 }
                <button onClick={() => editHandler(datas.rId)}>{datas.isEdited ? "cancel" : "edit"}</button> 
            </span>
            <button onClick={() => deleteHandler(datas.rId)}>delete</button>
            <button onClick={() => checkedHandler(datas.rId)}>{datas.isChecked ? "undone" : "done"}</button>
            </li>)) }
        </ul>

    </>)
    

}

export default Samples