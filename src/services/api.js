import axios from "axios";

// https://viacep.com.br/ws/72610403/json/

const api = axios.create({
baseURL: `https://viacep.com.br/ws/`
})

export default api