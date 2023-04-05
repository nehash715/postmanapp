import React, { Component } from 'react'
import http from "./httpService.js"

import auth from "./authService"


export default class PassportLogin extends Component {
state={
    form:{name:"",empCode:""}
}

handleChange=(e)=>{
    const {currentTarget:input}=e;
    let s1={...this.state}
    s1.form[input.name]=input.value;
    this.setState(s1)
}
async postData(url,obj){
    try{
        let response=await http.post(url,obj);
        let {data}=response
        console.log(data)
        auth.storeToken(data)
this.props.history.push("/details")
    }
    catch(ex){
        if(ex.response && ex.response.status===401){
            let errors={}
            errors.username=ex.response.data
            this.setState({errors:errors})
        }
    }
}

handleSubmit=(e)=>{
    e.preventDefault();
this.postData("/login",this.state.form)
}

  render() {
    let {name,empCode}=this.state.form;
    let {errors=null}=this.state
    return (
      <div className='container'>
       
        <h3 className='text-center'>Log In</h3>
        <div className="form-group">
    <label>Name</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter Name"
    value={name}
    onChange={this.handleChange}
    
    />
   
      </div> 
      <div className="form-group">
    <label>EmpCode</label>
    <input
    type="text"
    className="form-control"
    id="empCode"
    name="empCode"
    placeholder="Enter Code"
    value={empCode}
    onChange={this.handleChange}
    
    />
    
      </div> 
      <div className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Submit</div> 
      </div>
    )
  }
}
