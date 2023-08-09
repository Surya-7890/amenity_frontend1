import { createContext, useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const LoginContext = createContext();


export const LoginProvider = ({ children }) => {
  const [fetchDetails, setFetchDetails] = useState({
    data: null,
    loading: false,
    error: null
  });

  const login = () => {
    console.time("Timer1");
    const [data, loading, error] = useLogin(data);
    setFetchDetails({ data, loading, error });
    console.timeEnd('Timer1')
  }

  return (
    <LoginContext.Provider 
      value={{ fetchDetails, login }}
    >
      { children }
    </LoginContext.Provider>
  )
}