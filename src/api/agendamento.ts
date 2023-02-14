import client from "./client";
import { Agendamento } from "./types";

export async function criarAgendamento(agendamento: Agendamento, userId: Number){
    const resp = await client.post(`/donors/${userId}/donations`, agendamento)
}

export async function listarAgendamentoDoador(userId: Number){
    const resp = await client.get(`/donors/${userId}/donations`)
    return resp.data
}

export async function listarTodosAgendamentos(){
    const resp = await client.get('/donations')
    return resp.data
}

export async function doDonation(donationId: Number){
    const resp = await client.patch(`/donations/${donationId}`)
    return resp.data
}

export async function removeAgendamento(donationId: Number){
    const resp = await client.delete(`/donations/${donationId}`)
    return resp.data
}