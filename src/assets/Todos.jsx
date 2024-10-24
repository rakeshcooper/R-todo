import { useState , useRef} from "react"

function Todos(){
    const [datas, setDatas] = useState([])
    const [newdata, setNewdata] = useState()
    const [isedited, setNewisedited] = useState(true)
    const inputRefadd = useRef();
    const inputRefUpdate = useRef();
    const editRef = useRef();
    const updateRef = useRef();
    let newtodo = ""
    
    function inputhandler(e){
        setNewdata(e.target.value)
    }

    function addHandler(){
        const data = {todo:newdata, rId:crypto.randomUUID(),isEdited: false, isChecked: false}
        setDatas(datas => [...datas, data])
        inputRefadd.current.value = null
        
        console.log(datas);   
    }

    
    function deleteHandler(rId){
        setDatas(datas.filter((element) => element.rId != rId))
        console.log("deleted",rId);
        
    }

    function green(){

    }

    function editHandler(rId){
        let editdata = datas.map((element) =>
            {  if(element.rId === rId){
                return ({ ...element, isEdited: !element.isEdited })
            } else return element
            }
          );
        setDatas(editdata)
             console.log(editdata);
    }

    function updatedDatahandler(e){
        newtodo = e.target.value
    }

    function updateHandler(rId){
        let updateddata = datas.map((element) =>
            element.rId === rId ? { ...element, todo:newtodo,isEdited: false } : element
          );
        setDatas(updateddata)
             console.log(updateddata);
    }

    function isChecked(rId){
        let checkedddata = datas.map((element) =>
            element.rId === rId ? { ...element, isChecked: !element.isChecked } : element
          );
        setDatas(checkedddata)
             console.log(checkedddata);
    }

    return(
        <>
            <div>
                <input ref={inputRefadd} type="text" placeholder="Enter new task..."  onChange={(e) => inputhandler(e)}/>
                <button onClick={() => addHandler()}onDoubleClick={green}>add</button>
            </div>
            <ul>
                {datas.map((list,index) => <li key={index}><span className={`${list.isChecked ? "checked" : "unchecked"}`}>{list.todo}</span><button ref={editRef} onClick={() => editHandler(list.rId)}>{list.isEdited ? "cancel" : "Edit"}</button><span>
                    {list.isEdited ? (
                    <>
                    <input ref={inputRefUpdate} type="text" name="updateInput"   defaultValue={list.todo} onChange={(e) => updatedDatahandler(e)}/><button ref={updateRef} onClick={() => updateHandler(list.rId)}className="updateBtn">Update</button>
                    </>
                    ) : (<></>)}
                    </span>
                    <button onClick={() => isChecked(list.rId)}>{list.isChecked ? "Undone" : "Done"}</button><button onClick={() => deleteHandler(list.rId)}>delete</button></li>)}

            </ul>
        </>
    )
}

export default Todos