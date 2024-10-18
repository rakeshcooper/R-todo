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
        const data = {todo:newdata, rId:crypto.randomUUID()}
        setDatas(datas => [...datas, data])
        inputRefadd.current.value =""
        
        console.log(datas);   
    }

    

    function deleteHandler(rId){
        setDatas(datas.filter((element) => element.rId != rId))
        console.log("deleted",rId);
        
    }

    function green(){
        document.body.style.backgroundColor = "green"
    }

    function editHandler(){
        // editRef.current.style.display = "none"
        // updateRef.current.style.display = "block"
    }

    function updateHandler(){
        // editRef.current.style.display = "block"
        // updateRef.current.style.display = "none"
    }

    return(
        <>
            <div>
                <input ref={inputRefadd} type="text" placeholder="Enter new task..."  onChange={(e) => inputhandler(e)}/>
                <button onClick={() => addHandler()}onDoubleClick={green}>add</button>
            </div>
            <ul>
                {datas.map((list,index) => <li key={index}><span>{list.todo}</span><input ref={inputRefUpdate} type="text" name="updateInput"  /><span><button ref={editRef} onClick={editHandler}>Edit</button><button ref={updateRef} onClick={updateHandler}className="updateBtn">Update</button><button>Done</button><button onClick={() => deleteHandler(list.rId)}>delete</button></span></li>)}
            </ul>
        </>
    )
}

export default Todos