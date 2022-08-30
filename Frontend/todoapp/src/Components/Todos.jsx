import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Todo = () => {

    const [data,setData] = useState([])
    const [title,setTitle] = useState('')
    const [status,setStatus]=useState()
    const [lable, setLable]=useState('')

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

    const handleAdd=(e)=>{
        
            e.preventDefault();
            const data = {
            title,
            status,
            lable
          };
        
        axios({
            method: 'post',
            url: `http://localhost:3030/todos`,
            data: data,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
          
        
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
    <div>
    <input type="text" placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
      <input type="checkbox" placeholder='Status' onChange={(e)=>setStatus(e.target.value)} />
      <input type="text" placeholder='Lable' onChange={(e)=>setLable(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
    <div>
   {
    data.map((ele)=>{
        console.log(ele)
        return(
            <>
            <h4>{ele.createdAt}</h4>
            <h4>{ele.updatedAt}</h4>
            <h4>{ele._id}</h4>
          
            <button onClick={()=>handleDelete()}>Delete</button>
            <button onClick={()=>handleUpdate()}>Update</button>
            </>
        )
    })
   }</div>
   </div>
   </>
  )
}

export default Todo