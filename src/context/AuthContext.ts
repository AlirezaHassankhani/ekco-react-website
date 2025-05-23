import { createContext } from "react"

const AuthContext = createContext({
  login: false,
});

export default AuthContext