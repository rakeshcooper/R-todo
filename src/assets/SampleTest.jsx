import { useState } from "react"

function SampleTest(){
const rId = crypto.randomUUID();    
const [data,setData] = useState(["cooper","rakesh"])

    return(<>
    <ul>
        {data.map((datas,index) => 
        <li>{datas}</li>)}
    </ul>
    </>)
}

export default SampleTest