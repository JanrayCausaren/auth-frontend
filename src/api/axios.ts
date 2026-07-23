import axios from 'axios'


type ApiConfigs = {
    baseUrl?: string
}

export const api = axios.create({
    baseURL: "http://localhost:3000", 
    withCredentials: true,
    timeout: 2500
});