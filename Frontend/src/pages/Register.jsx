import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [formData,setFormData]=useState({email:'',password:''})
    const[error,setError]=useState({})
    const navigate=useNavigate();
    const submitHandler=(event)=>{
        event.preventDefault()
         const validErrors=validations()
    if(Object.keys(validErrors).length>0)
    {
        setError(validErrors)
    }
    else
    {
        alert("Login Successfull")
        navigate('/Home');
    }
   }
   const validations=()=>{
    const errorMessage={}
    if(!formData.email.trim())
    {
        errorMessage.email="Email is required please fill it!!"
    }
    if(!formData.password.trim())
    {
        errorMessage.password="Password is required please fill it!!"
    }
    return errorMessage;
   }

    const changeHandler=(event)=>{
          const {name,value}=event.target ;
          setFormData({...formData,[name]:value})
    }

  return (
      <div className='credentials-page'>

         <h1>Register</h1>
         <form onSubmit={submitHandler}>
            <input type='email' name='email' placeholder='Enter registered email...'
            value={formData.email} onChange={changeHandler}/>
            {error.email && <p style={{color:"red"}}>{error.email}</p>}
        <br />

            <input type='password' name='password' placeholder='Enter password...'
                value={formData.password}
                onChange={changeHandler}
            />
            {error.password && <p style={{color:"red"}}>{error.password}</p>}
        <br />
             <button type="submit">Login</button>
         </form>
      </div>
  )
}

export default Login