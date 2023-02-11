import client from "./client";
import { Agendamento } from "./types";

export async function criarAgendamento(agendamento: Agendamento){
    const resp = await client.post('/donors/1/donations', agendamento) //FIXME: Id usuario logado
    return resp.data
}

export async function listarAgendamentoDoador(){
    const resp = await client.get('/donors/1/donations') //FIXME: Id usuario logado
    return resp.data
}

export async function listarTodosAgendamentos(){
    const resp = await client.get('/donations')
    return resp.data
}