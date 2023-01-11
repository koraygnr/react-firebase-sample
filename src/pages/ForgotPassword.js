import React, { useState } from 'react'
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { Link } from 'react-router-dom'

function ForgotPassword() {
    
    const [ email, setEmail ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if ( !email ) {
          return alert("Enter your email");
        }
        sendPasswordResetEmail(auth, email)
            try {
                alert("Email sent to reset password.")
            } catch (error) {
             console.log(error);
            }
        console.log("email= ", email);
    }

  return (
    <div className='max-w-md mx-auto py-12'>
    <h1 className='text-2xl font-medium mb-8'>Forgot password ?</h1>
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
        type="submit" 
        value="Send" 
        className='p-4 bg-pink-500 rounded-md font-bold text-white hover:bg-pink-600 cursor-pointer active:bg-pink-700'
      />
    </form>
    <div className='flex justify-between items-center mt-2'>
        <Link to="/sign-in" className='text-gray-400'>
            Back to Sign In
        </Link>
      </div>

  </div>
  )
}

export default ForgotPassword