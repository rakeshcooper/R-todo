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
        const data = {todo:newdata, rId:crypto.randomUUID(),isEdited: true}
        setDatas(datas => [...datas, data])
        inputRefadd.current.value =""
        
        console.log(datas);   
    }

    

    function deleteHandler(rId){
        setDatas(datas.filter((element) => element.rId != rId))
        console.log("deleted",rId);
        
    }

    function green(){
        // document.body.style.backgroundColor = "green"
    }

    function editHandler(rId){
        // setNewisedited((isedited) => {return isedited = false})
        setDatas(datas.filter((element) => {
            if(element.rId === rId){
                return element.isEdited == false
            }
            console.log(element.isEdited);
        }))

            // console.log(element.rId);
            
    }

    function updateHandler(){
        // setNewisedited(true)

        // setDatas(datas.filter((element) => {
        //     if(element.rId === rId){
        //         return element.isEdited == false
        //     }}))

        //     console.log(element.isEdited);
            
        
    }

    return(
        <>
            <div>
                <input ref={inputRefadd} type="text" placeholder="Enter new task..."  onChange={(e) => inputhandler(e)}/>
                <button onClick={() => addHandler()}onDoubleClick={green}>add</button>
            </div>
            <ul>
                {datas.map((list,index) => <li key={index}><span>{list.todo}</span><span>{list.rId ? <button ref={editRef} onClick={() => editHandler(list.rId)}>Edit</button> : <span><input ref={inputRefUpdate} type="text" name="updateInput"  /><button ref={updateRef} onClick={updateHandler}className="updateBtn">Update</button></span>}<button>Done</button><button onClick={() => deleteHandler(list.rId)}>delete</button></span></li>)}
            </ul>
        </>
    )
}

export default Todos