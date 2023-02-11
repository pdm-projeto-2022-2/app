import client from "./client";
import { Doador } from "./types";

export async function registrarDoador(doador: Doador){
    const resp = await client.post("/donors", doador)
    return resp.data
}

export async function listarDoadorBySangue(sangue :string) {
    const resp = await client.get(`/donors?bloodType=${sangue}`)
    return resp.data
}