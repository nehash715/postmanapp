import React,{Component} from "react";
import {Link} from "react-router-dom"
import queryString from "query-string"
import http from "./httpService"
class Book extends Component{
    state={ person:{}
    }

 async componentDidMount(){
    let {id}=this. props.match.params
    console.log(id)
    let response=await http.get(`/booksapp/book/${id}`)
   
    console.log(response)
    let {data}=response
    this.setState({person:data})
}
render(){
    let {person}=this.state
    console.log(person)
    return <div className="container">
       <h4>Book:{person.name}</h4>
       <hr></hr>
       <h6>Author:           {person.author}</h6><hr></hr>
       <h6>Genre:            {person.genre}</h6><hr></hr>
       <h6>Description:      {person.description}</h6><hr></hr>
       <h6>Blurb:            {person.blurb}</h6><hr></hr>
       <h6>Price:            {person.price}</h6> <hr></hr>
       <h6>Rating:           {person.avgrating}</h6>
    </div>
}

}
export default Book