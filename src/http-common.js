import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:55113/",
    headers:{
        "content-type":"application/json",
        "Access-Control-Allow-Origin": "*"
    }
})