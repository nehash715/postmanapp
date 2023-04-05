import React, { Component } from 'react'
import http from './httpService'
export default class Users extends Component {
    state={
        user:[]
    }

    async componentDidMount(){

    let response=await http.get(`/productApp/users`);
    let {data}=response
    this.setState({user:data})
    console.log(response)
    }
    
    addUser=()=>{
      this.props.history.push("/users/add")
    }
    edit=(username)=>{
      this.props.history.push(`/users/${username}/edit`)
    }
  render() {
let {user}=this.state
console.log(user)
    return (
      <div class="container">
        {user.map((p)=>{
          return  <div className='row'>
    <div className='col-3'>{p.name}</div>
    <div className='col-3'>{p.role}</div>
    <div className='col-3'>{p.username}</div>
    <div className='col-1'><button className='btn btn-warning' onClick={()=>this.edit(p.username)}>Edit</button></div>
    <div className='col-2'><button className='btn btn-danger'>Delete</button></div>
    
</div>

        })}
        <div className='btn btn-primary' onClick={()=>this.addUser()}>Add</div>
        
      </div>
    )
  }
}
