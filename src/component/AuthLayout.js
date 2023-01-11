import React from 'react'
import {Navigate, Outlet} from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'

function AuthLayout() {
    
    const [ user, isLoading ] = useAuthState(auth)
    
    if( isLoading ) {
        return <h1>Loading...</h1>
    }

    if(user) {
        return <Navigate to="/" replace />
    }
  return (
    <Outlet />
  )
}

export default AuthLayout