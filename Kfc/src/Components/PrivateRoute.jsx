import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
    const {isAuth,Em}=useContext(AuthContext)
    console.log(isAuth,Em)
  return (
    <div>{isAuth?children:<Navigate to={"/login"}/>}</div>
  )
}

export default PrivateRoute