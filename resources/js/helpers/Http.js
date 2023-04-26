import axios from "axios";

const Http = axios.create({
    withCredentials: true,
})

export default Http