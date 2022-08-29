import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')

    const[showUser,setShowuser]=useState(false)

    async function LoginUser (body){
        body = JSON.stringify({
            userbody : body
        });
        console.log(body)
        try {
            const res = await fetch(
                `http://localhost:3030/users`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': "application/json"
                  },
                  body,
                }
              )
            let data = await res.json()
            console.log(data)
            setShowuser(true)
        } catch (error) {
            console.log(error)
        }
    }

    
    const handleLogin = ( ) =>{
        const body = {
            email:email,
            password:password
        }
        LoginUser(body)
    }
  return (
    <div>
      <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login