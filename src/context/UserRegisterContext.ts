import { createContext } from "react"

export interface UserRegisterContextProps{
    nome?: string,
    tipoSangue?: string
    email?: string
    tel?: string
    senha?: string
    sexo?: string
    dataNascimento?: Date 
    imagem?: string
    localizacao?: string
}

const UserRegisterContext = createContext<UserRegisterContextProps>({})

export default UserRegisterContext