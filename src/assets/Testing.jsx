import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from 'react';
function Testing(){

    const [data,setData] = useState([])
    const [newdata, setNewdata] = useState()

    function addHandler(){
        setData(data => [...data,{ todo:newdata, rId:uuidv4(), isEdited: false, isChecked: false}])
        
        console.log(data);
        
    }

    function inputValue(e){
        setNewdata(e.target.value)
    }

    



    return(
        <>
        <h1>Todo</h1>
        <div><input type="text" placeholder='Please enter todo' onInput={(e) => inputValue(e)}/><button onClick={addHandler}>Add</button></div>
        <ul>

        </ul>
        </>
    )
}
export default Testing