import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"

class Person extends Component{
    state={ person:{}
    }

 async componentDidMount(){
    let {id}=this.props.match.params
    let response=await http.get(`/personApp/persons/${id}`)
   // console.log(response)
    let {data}=response
    this.setState({person:data})
}
render(){
    let {person}=this.state
    return <div className="container">
        <h4>Details of the person</h4>
        Id:{person.id}<br></br>
        Name:{person.name}<br></br>
        Age:{person.age}<br></br>
        City:{person.city}<br></br>
        Company:{person.company}<br></br>
        <Link to={`/persons/${person.id}/delete`}>Delete</Link>
        <br></br>
        <Link to={`/persons/${person.id}/edit`}>Edit</Link>
    </div>
}

}
export default Person