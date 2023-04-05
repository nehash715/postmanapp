import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
class Star extends Component{
    state={ person:{}
    }

 async componentDidMount(){
    let {id}=this.props.match.params
    let response=await http.get(`/sporticons/details/${id}`)
    console.log(response)
    let {data}=response
    this.setState({person:data})
}
render(){
    let {person}=this.state
    console.log(person)
    return <div className="container">
     
            <h4>{person.name}</h4>
            <h6>Date of Birth:{person.details?.dob}</h6>
            <h6>Sport:{person.sport}</h6>
            <h6>Country:{person.country}</h6>
            <p>{person.details?.info}</p>
            <Link to={`/${person.sport}`}>{person.sport}</Link>
      
    </div>
}

}
export default Star