import { AxiosRequestConfig } from "axios";
import client from "./client";
import { Doador } from "./types";

export async function registrarDoador(formData: FormData){
    const config: AxiosRequestConfig = {
        headers:{
            'content-type': 'multipart/form-data'
        }
    }
    const resp = await client.post("/donors", formData, config)
    return resp.data
}

export async function listarDoadorBySangue(sangue :string) {
    const resp = await client.get(`/donors?bloodType=${sangue}`)
    return resp.data
}