import jwtDecode from "jwt-decode";
import client from "./client";

export async function login(username: string, password:string){
    const data = {
        username,
        password
    }
    const resp = await client.post(`/login`, data)
    return resp.data;
}