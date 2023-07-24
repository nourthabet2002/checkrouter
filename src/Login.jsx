import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/all")} >go homr</button>
    </div>
  )
}

export default Login

