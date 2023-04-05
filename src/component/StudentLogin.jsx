import React, { Component } from 'react'
import http from "./httpService.js"
import auth from "./AllService"



export default class StudentLogin extends Component {
state={
    form:{email:"",password:""},
    error:{}
}

handleChange=(e)=>{
    const {currentTarget:input}=e;
    let s1={...this.state}
    s1.form[input.name]=input.value;
    this.handleValidate(e)
    this.setState(s1)
}
async postData(url,obj){
   let response=await http.post(url,obj);
 let {data}=response
console.log(data)
 auth.login(data)
if(data.role==="admin"){
        window.location="/admin"
}
else if(data.role==="student"){
    window.location="/student"
}
else{
    window.location="/faculty"
}
   
}

handleSubmit=(e)=>{
    e.preventDefault();
    const {form}=this.state
    let errors=this.validateAll();
    if(this.isValid(errors)){
        
      this.postData("/login",this.state.form)
        alert("Login Successfully")
    }
      else{
        let s1={...this.state}
        s1.error=errors
        this.setState(s1)
      }


}

handleValidate=(e)=>{
  let {currentTarget:input}=e
  let s1={...this.state}
  switch(input.name){
      
      case "email":s1.error.email=this.validateEmail(input.value)
      break;
      case "password":s1.error.password=this.validatePassword(input.value)

  }
  this.setState(s1)
}

isValid=(errors)=>{
  //errors would have keys with non empty string as value
  let keys=Object.keys(errors)//keys in array
 let count= keys.reduce((acc,curr)=>{
      return errors[curr]?acc+1:acc
  },0)
  return count===0;
}

validateAll=()=>{
  let {email,password}=this.state.form
  
  let errors={}
  
  errors.email=this.validateEmail(email)
  errors.passowrd=this.validatePassword(password)
  
  return errors
}
validateEmail=(email)=>{
  return !email?"Email must be entered":!email.includes('@')?"Not  a valid email":""
}
validatePassword=(password)=>{
  return !password?"Password must be entered":password.length<7?"Password should have minimum 7 characters":""
  
}
isFormValid=()=>{
  let errors=this.validateAll();
 
//this.isValid(errors)
//console.log(this.isValid(errors))
  return !this.isValid(errors)
}

  render() {
    let {email,passowrd}=this.state.form;
   let {error}=this.state
    return (
      <div className='container'>
       
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
    onBlur={this.handleValidate}
    />
   {error.email?<span className="text-danger">{error.email}</span>:""}
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
    onBlur={this.handleValidate}
    />
    {error.password?<span className="text-danger">{error.password}</span>:""}
      </div> 
      <div className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Submit</div> 
      </div>
    )
  }
}
