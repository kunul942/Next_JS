//*Archivo "APIS" para realizar peticiones HTTP

import axios from "axios"

const entriesApi = axios.create({
    baseURL: '/api'
})


//*Axios siempre exportamos por default
export default entriesApi



