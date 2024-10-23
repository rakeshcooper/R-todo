import { useState , useRef} from "react"

function Todos(){
    const [datas, setDatas] = useState([])
    const [newdata, setNewdata] = useState()
    const [isedited, setNewisedited] = useState(true)
    const inputRefadd = useRef();
    const inputRefUpdate = useRef();
    const editRef = useRef();
    const updateRef = useRef();
    
    function inputhandler(e){
        setNewdata(e.target.value)
    }

    function addHandler(){
        const data = {todo:newdata, rId:crypto.randomUUID(),isEdited: false}
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
        let editdata = datas.filter((element,index) => {
            if(element.rId === rId){
                console.log(element.isEdited);
                element.isEdited = true
                console.log(element.isEdited);
                 
            }
            return element.isEdited   
            
        })
        setDatas(datas =>[ ...datas,editdata])
             console.log(datas);
    }

    function updateHandler(){

    }

    return(
        <>
            <div>
                <input ref={inputRefadd} type="text" placeholder="Enter new task..."  onChange={(e) => inputhandler(e)}/>
                <button onClick={() => addHandler()}onDoubleClick={green}>add</button>
            </div>
            <ul>
                {/* {datas.map((list,index) => <li key={index}><span>{list.todo}</span><span>{list.rId ? <button ref={editRef} onClick={() => editHandler(list.rId)}>Edit</button> : <span><input ref={inputRefUpdate} type="text" name="updateInput"  /><button ref={updateRef} onClick={updateHandler}className="updateBtn">Update</button></span>}<button>Done</button><button onClick={() => deleteHandler(list.rId)}>delete</button></span></li>)} */}

                {datas.map((list,index) => <li key={index}><span>{list.todo}</span><span> <button ref={editRef} onClick={() => editHandler(list.rId, index)}>Edit</button><span><input ref={inputRefUpdate} type="text" name="updateInput"  /><button ref={updateRef} onClick={updateHandler}className="updateBtn">Update</button></span><button>Done</button><button onClick={() => deleteHandler(list.rId)}>delete</button></span></li>)}

            </ul>
        </>
    )
}

export default Todos