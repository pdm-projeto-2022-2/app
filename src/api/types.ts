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
