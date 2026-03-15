import axios from "axios";

const API = axios.create({
baseURL: "http://localhost:4000"
})

API.interceptors.use((req)=>{

const token = localStorage.getItem("token")

if(token){
req.headers = `Bearer ${token}`
}

return req

})

export default API