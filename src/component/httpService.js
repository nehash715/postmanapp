import axios from "axios";
import auth from "./authService.js"
//const baseURL="http://localhost:2410"
//const baseURL="https://sportserer.onrender.com"
//const baseURL="https://studentserver-nb7o.onrender.com"
//const baseURL="https://axiosserver.onrender.com"
function get(url){
    console.log(url)
    // token=auth.getToken()
    let token=auth.getToken()
    console.log(token)
    return axios.get(url,{headers:{Authorization:token}})
    //return axios.get(url)
   
    
}

function post(url,obj){

    console.log(url)
    return axios.post(url,obj)
}
function put(url,obj){
    return axios.put(url,obj)
}
function deleteApi(url){
    console.log(url)
    return axios.delete(url)
}  




export default{
    get,
    post,
    deleteApi,
    put
}