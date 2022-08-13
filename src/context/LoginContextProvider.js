
import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(true);
  return (
    <div>
        <LoginContext.Provider value = {userDetails}>
            {children}

        </LoginContext.Provider>


    </div>
  )
}
