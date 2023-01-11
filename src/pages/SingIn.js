import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../firebase/firebase'
import { Link } from "react-router-dom"

function SignIn() {
  const initialValues = ""
  const [ email, setEmail ] = useState(initialValues)
  const [ password, setpassword ] = useState(initialValues)

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !email || !password ) {
      return alert("eksik");
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(()=> {
      console.log("Sign In successful");
    })
    .catch((error)=> {
      console.log(error.message);
    })
  }

  return (
    <div className='max-w-md mx-auto py-12'>
      <h1 className='text-2xl font-medium mb-8'>Sign In</h1>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}>
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
          value="Sign In" 
          className='p-4 bg-pink-500 rounded-md font-bold text-white hover:bg-pink-600 cursor-pointer active:bg-pink-700'
        />
      </form>
      <div className='flex justify-between items-center mt-2'>
        <Link to="/sign-up" className='text-gray-400'>
            Don't have an account? Sign Up
        </Link>
        <Link to="/forgot-password" className='text-gray-400 text-right text-sm'>
          Forgot password?
        </Link>
      </div>
    </div>
  )
}

export default SignIn