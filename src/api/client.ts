import axios from "axios";

const client = axios.create({
    baseURL: 'http://192.168.0.150:8080'
  });


export default client