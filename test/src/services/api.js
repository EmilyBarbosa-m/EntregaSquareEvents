import Axios from 'axios';

const api = Axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario-squareevents")
    }
});

export default api;