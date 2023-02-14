import { createContext } from "react"
import { UserTokenDetail } from "../api/types"

export interface AuthContextProps{
    role: string,
    details: UserTokenDetail
}

const AuthContext = createContext<AuthContextProps>({role: undefined, details: undefined})

export default AuthContext