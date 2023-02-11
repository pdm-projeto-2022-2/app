import client from "./client";
import { Notification } from "./types";

export async function criarNotificacao(notificacao: Notification){
    const resp = await client.post('/notifications', notificacao)
    return resp.data
}

export async function listarNotificacoes(bloodType: string){
    const resp = await client.get(`/notifications?bloodType=${bloodType}`)
    return resp.data
}