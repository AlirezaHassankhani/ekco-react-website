import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

const PrivateComponent = ({ children }: {children: React.ReactNode}) => {

    let authContext = useContext(AuthContext)

    return true ? (children) : <Navigate to='/login' />
}

export default PrivateComponent