import { useCallback,useState } from 'react'
import './App.css'
import Child  from './Child'

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber]=useState([1,2,3,4,5])
  const handleAddData=useCallback(()=>{
    setNumber((pre)=>([...pre,pre.length+1]))
  },[])
  console.log("parent")

  return (
    <>
    <p>Count :{count}</p>
    <button onClick={()=>setCount(count+1)}>increamentCount</button>
    <Child addData={handleAddData} />
    <ul>
      {
        number.map((number,ind)=><li key={ind}>Number:{number}</li>)
      }
    </ul>
    </>
   
  )
}

export default App
