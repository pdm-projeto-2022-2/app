import { createContext } from "react"

export interface AuthContextProps{
    role: string
}

const AuthContext = createContext<AuthContextProps>({role: undefined})

export default AuthContext