import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../firebase/firebase'
import { Link } from 'react-router-dom'

function SingUp() {
  const initialValues = ""
  const [ name, setName ] = useState(initialValues)
  const [ email, setEmail ] = useState(initialValues)
  const [ password, setpassword ] = useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !email || !password ) {
      return alert("eksik");
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((auth)=> {
      updateProfile(auth.user, { displayName: name })
      console.log("SignUp successful");
      console.log(auth.user);
    })
    .catch((error) => {
      console.log(error.message);
    })    
  }

  return (
    <div className='max-w-md mx-auto py-12'>
      <h1 className='text-2xl font-medium mb-8'>Create new account</h1>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='Enter your name' 
          className='p-4 bg-gray-100 rounded-md'
        />
        <input 
          type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='Enter your email' 
          className='p-4 bg-gray-100 rounded-md'
        />
        <input 
          type="password"
          value={password} 
          onChange={(e)=>setpassword(e.target.value)}
          placeholder='Enter your password' 
          className='p-4 bg-gray-100 rounded-md'
        />
        <input 
          type="submit" 
          value="Sing Up" 
          className='p-4 bg-green-500 rounded-md font-bold text-white hover:bg-green-600 cursor-pointer active:bg-green-700'
        />
        <Link to="/sign-in" className='text-gray-400'>
          Already have an account? Sign In
        </Link>
      </form>
    </div>
  )
}

export default SingUp