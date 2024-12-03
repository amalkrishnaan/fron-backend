import React,{memo} from 'react'

const Child = ({addData}) =>{
    console.log("child");
    return(
   <div>
    <button onClick={addData}> Add list
    </button>
   </div>
    )
}


export default memo( Child)