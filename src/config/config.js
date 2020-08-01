import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"",
    headers:{
        "Content-Type":"application/json; charset=utf-8"
    },
    proxy:"172.17.2.218:8085"
});
export default axiosInstance;