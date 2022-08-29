import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Todo = () => {

    const [data,setData] = useState([])

    async function getData (){
        try {
            let res = await fetch ('http://localhost:3030/todos')
            let result = await res.json()
            // console.log(data)

            setData(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete=()=>{
     
    }

    const handleUpdate=()=>{
     
    }

    console.log(data)
    useEffect(()=>{
        getData()
    },[])
  return (
   <>
<div style={{}}>
   {
    data.map((ele)=>{
        console.log(ele)
        return(
            <>
            <h4>{ele.createdAt}</h4>
            <h4>{ele.updatedAt}</h4>
            <button onClick={()=>handleDelete()}>Delete</button>
            <button onClick={()=>handleUpdate()}>Update</button>
            </>
        )
    })
   }
   </div>
   </>
  )
}

export default Todo