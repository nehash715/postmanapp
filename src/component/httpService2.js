// read all entities
import axios from "axios";

const baseURL="https://content.guardianapis.com/search?api-key=f0879464-70a6-4872-afbc-a4bb085efae2"

function get(url){
    console.log(url)
    return axios.get(baseURL+ url)
    
}

function post(url,obj){
    return axios.post(baseURL+ url,obj)
}
  
export default{
  
    get,
    post,
}
//fetch("https://content.guardianapis.com/search?api-key=f0879464-70a6-4872-afbc-a4bb085efae2")
/*.then(response => response.json())
.then(response => {
  //this.setState({
  // friends: response
   console.log(response)
//  })
})
.catch(err => { console.log(err); 
});
 //let response= await http.get(`&section=${searchStr.substring(8)}`)
export default{fetch}*/