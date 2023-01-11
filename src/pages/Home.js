import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useAuthState } from "react-firebase-hooks/auth"

function Home() {

  const [user, isLoading] = useAuthState(auth)
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut(auth)
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='max-w-md mx-auto py-12'>
      <h1 className='text-2xl font-medium mb-8'>Home Page</h1>
      <div className='flex justify-between items-center bg-gray-100 rounded-md p-4 gap-4'>
        <div className='flex flex-col gap-1'>
          <p className='text-xl'>Hi, <span className='font-medium'>{user.displayName} </span>welcome 👋</p>
          <p className='text-gray-400'>{user.email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="p-2 bg-orange-500 rounded-md text-white "
        >
          Sign out
        </button>
      </div>
    </div>

  )
}

export default Home