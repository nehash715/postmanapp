import React, { Component } from 'react'
import http from "./httpService.js"
import auth from "./AllService"
export default class Login extends Component {
state={
    form:{username:"",passowrd:""}
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
    auth.login(data)
    //this.props.history.push("/products")
    window.location="/products"
    }
    catch(ex){
        console.log(ex.response.data)
    if(ex.response && ex.response.status===400){
        let errors={}
        errors.username=ex.response.data;
        this.setState({errors:errors})
    }
    }

}

handleSubmit=(e)=>{
    e.preventDefault();
this.postData("/productApp/login",this.state.form)
}

  render() {
    let {username,password}=this.state.form
    let {errors=null}=this.state
    console.log(errors)
    return (
       <div className="container">
   <div className="form-group">
    <label>Username</label>
    <input
    type="text"
    className="form-control"
    id="username"
    name="username"
    placeholder="Enter username"
    value={username}
    onChange={this.handleChange}
    
    />
    {errors && errors.username && (<span className='text-danger'>{errors.username}</span>)}
      </div>
      <div className="form-group">
    <label>Password</label>
    <input
    type="password"
    className="form-control"
    id="passport"
    name="password"
    placeholder="Enter password"
    value={password}
    onChange={this.handleChange}
    
    />
      </div>
      <div className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Submit</div>
      </div>
    )
  }
}
