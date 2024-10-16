import React, { useState , useRef} from "react"

function Todos(){
    const [data, setData] = useState(["Drink water"])
    const inputRef = useRef();
    function addHandler(){
        setData(...tasks,)
    }
    return(
        <>
            <div>
                <input ref={inputRef} type="text" />
                <button onClick={addHandler}>add</button>
            </div>
            <ul>
                {data.map((list,index) => <li key={index}><span>{list}</span><button>update</button><button>delete</button></li>)}
            </ul>
        </>
    )
}

export default Todos