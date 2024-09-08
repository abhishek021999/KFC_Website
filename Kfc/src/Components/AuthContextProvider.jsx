import React, { createContext, useState } from 'react'
export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false)
    const [Em,setEm]=useState("")
    const [cartItemlength,setCartItemslength]=useState(0)

  return (
    <AuthContext.Provider value={{isAuth,setisAuth,Em,setEm,cartItemlength,setCartItemslength}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider