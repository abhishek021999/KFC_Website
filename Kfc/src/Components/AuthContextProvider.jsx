import React, { createContext, useState } from 'react'
export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false)
    const [Em,setEm]=useState("")

  return (
    <AuthContext.Provider value={{isAuth,setisAuth,Em,setEm}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider