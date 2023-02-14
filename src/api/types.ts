export interface Doador{
    id?: number
    name: string,
    bloodType: string
    email: string
    phone: string
    password?: string
    sex: string
    birthDate: Date 
    image: string
    location?: string
}

export interface Agendamento{
    id?: Number;
    date: Date;
    status?: 'SCHEDULED' | 'DONE'
    donor?: Doador
}

export interface Notification{
    id?: Number;
    bloodType?: string //FIXME: enum
    title: string,
    description: string
}

export interface UserTokenDetail{
    ROLE: "ROLE_USER" | "ROLE_EMPLOYEE",
    DETAILS: Doador | Employee,
    sub: string,
    iat: Number,
    exp: Number
}

export interface Employee{
    id?: Number,
    email: string,
    password?: string,
    name: string,
    registration: string,
    image: string
}
