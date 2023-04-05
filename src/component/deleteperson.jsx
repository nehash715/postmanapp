import React,{Component} from "react";
import http from "./httpService"

class DeletePerson extends Component{
    async componentDidMount(){
        const {id}=this.props.match.params;
        console.log(id)
        let response=await http.deleteApi(`/personApp/persons/${id}`)
        console.log(response)
        this.props.history.push("/persons");
    }
    render(){
        return ""
    }
}
export default DeletePerson