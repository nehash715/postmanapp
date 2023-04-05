import React, { Component } from 'react'
import http from "./httpService.js"
import auth from "./AllService"
export default class BankLogin extends Component {
state={
    form:{name:"",passowrd:""}
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
    window.location="/wlcm"
    }
    catch(ex){
        console.log(ex.response.data)
    if(ex.response){
        let errors={}
        errors.username=ex.response.data;
        this.setState({errors:errors})
    }
    }

}

handleSubmit=(e)=>{
    e.preventDefault();
this.postData("/login",this.state.form)
}

  render() {
    let {name,password}=this.state.form
    let {errors=null}=this.state
    console.log(errors)
    return (
       <div className="container">
        <h2>Wepcome to GBI Bank</h2>
   <div className="form-group">
    <label>Username</label>
    <input
    type="text"
    className="form-control"
    id="name"
    name="name"
    placeholder="Enter username"
    value={name}
    onChange={this.handleChange}
    
    />
    {errors && errors.name && (<span className='text-danger'>{errors.name}</span>)}
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
      <div className='btn btn-primary btn-sm' onClick={this.handleSubmit}>Login</div>
      </div>
    )
  }
}
