import { useState , useRef} from "react"

function Todos(){
    const [datas, setDatas] = useState(["Drink water"])
    const [newdata, setNewdata] = useState()
    const inputRef = useRef();
    function inputhandler(e){
        setNewdata(e.target.value)
    }
    function addHandler(){
        setDatas([...datas, newdata])
    }
    return(
        <>
            <div>
                <input ref={inputRef} type="text" placeholder="Enter new task..."  onChange={(e) => inputhandler(e)}/>
                <button onClick={() => addHandler()}>add</button>
            </div>
            <ul>
                {datas.map((list,index) => <li key={index}><span>{list}</span><button>update</button><button>delete</button></li>)}
            </ul>
        </>
    )
}

export default Todos