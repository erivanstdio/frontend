//axios vai ser utilizado para fazer as chamadas para a aplicacao em node

//criando um service de api
import axios from 'axios';

//criando uma instancia do axios, por querermos usar uma base_url
const api = axios.create({
    baseURL: 'https://integrador-backend.herokuapp.com',
});

export default api;