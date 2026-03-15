import React from "react";
import { createContext } from "react";
import { useState } from "react";


export const AuthContext= createContext()

export const AuthProvider= ({children})=>{

const[token,setToken]=useState(

localStorage.getItem("token")
)

const login=(token)=>{
    localStorage.setItem("token",token)
setToken(token)

}

const logout=()=>{
    localStorage.removeItem("token")
    setToken(null);
}
return(
<AuthContext.Provider
value={{token,login,password}}>
    {children}
</AuthContext.Provider>
)
}

export const useAuth = () => {
  return useContext(AuthContext);
};


