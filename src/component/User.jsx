import React, { Component } from 'react'
import http from "./httpService.js"
export default class User extends Component {

    state={
        user:{}
    }

    async componentDidMount(){
       
            let response=await http.get("/myDetails")
            let {data}=response
          //  console.log(data)
            this.setState({user:data})
       
    }
  render() {
    const {user}=this.state
    console.log(user)
    return (
      <div>
        <h2>Welcome to User page</h2>
        <h4>Code:{user.empCode}</h4>
        <h4>Name:{user.name}</h4>
        <h4>Department:{user.department}</h4>
        <h4>Designation:{user.designation}</h4>
<h4>Salary:{user.salary}</h4>        
<h4>Gender:{user.gender}</h4>
      </div>
    )
  }
}
