import React, { Component } from 'react'
import http from "./httpService.js"
import auth from "./AllService"



export default class EmplogIn extends Component {
state={
    form:{email:"",password:""}
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
        auth.login(data)
if(data.role==="ADMIN"){
        window.location="/admin"
}
else{
    window.location="/emp"
}
    }
    catch(ex){
        if(ex.response && ex.response.status===401){
            let errors={}
            errors.email=ex.response.data
            this.setState({errors:errors})
        }
    }
}

handleSubmit=(e)=>{
    e.preventDefault();
this.postData("/empapp/loginuser",this.state.form)
}

  render() {
    let {email,passowrd}=this.state.form;
    let {errors=null}=this.state
    return (
      <div className='container'>
        <h2 className="text-center">Welcome to Employee Management Portal</h2>
        <h3 className='text-center'>Log In</h3>
        <div className="form-group">
    <label>Email</label>
    <input
    type="text"
    className="form-control"
    id="email"
    name="email"
    placeholder="Enter Email"
    value={email}
    onChange={this.handleChange}
    
    />
    {errors && errors.email && (<span className='text-danger'>{errors.email}</span>)}
      </div> 
      <div className="form-group">
    <label>Password</label>
    <input
    type="password"
    className="form-control"
    id="passowrd"
    name="password"
    placeholder="Enter Password"
    value={passowrd}
    onChange={this.handleChange}
    
    />
    
      </div> 
      <div className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Submit</div> 
      </div>
    )
  }
}
