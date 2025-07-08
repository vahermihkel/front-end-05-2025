import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

// edasijõudnute võimalus: Redux.